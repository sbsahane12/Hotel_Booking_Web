const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const { isLoggedIn, isAdmin } = require("../middleware.js");
const UserUpload = require("../models/useruploads.js");

// Middleware function to validate the request body for creating or updating a listing
const validateListing = (req, res, next) => {
    // Validate the request body against the listing schema
    const { error } = listingSchema.validate(req.body);

    // If there's an error, create an ExpressError and pass it to the error handler middleware
    if (error) {
        const errorDetails = error.details.map(d => d.message).join(', ');
        throw new ExpressError(400, `Validation error: ${errorDetails}`);
    } else {
        // If there's no error, proceed to the next middleware
        next();
    }
}

// Index Route: Fetch all listings and render the index view
router.get("/", wrapAsync(async(req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings }); // Update the path here
}));

// New Route: Render the form to create a new listing
router.get("/new", isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");
});

// Show Route: Fetch and render a specific listing by ID
router.get("/:id", wrapAsync(async(req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
        req.flash("error", "Listing you are request is not exist!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}));


// Create Route: Create a new listing
router.post("/", isLoggedIn, isAdmin, validateListing, wrapAsync(async(req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New Listing Is Created!");
    res.redirect("/listings");
}));

// Edit Route: Render the form to edit a listing
router.get("/:id/edit", isLoggedIn, isAdmin, wrapAsync(async(req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you are request is not exist!");
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
}));

// Update Route: Update a listing by ID
router.put("/:id", isLoggedIn, isAdmin, wrapAsync(async(req, res) => {
    let { id } = req.params;
    if (!req.body.listing) {
        throw new ExpressError(400, "Send Valid Data");
    }
    const listing = await Listing.findByIdAndUpdate(id, {...req.body.listing });
    req.flash("success", "Listing Is Updated!");
    res.redirect(`/listings/${id}`);
}));

// Delete Route: Delete a listing by ID
router.delete("/:id", isLoggedIn, isAdmin, wrapAsync(async(req, res) => {
    let { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id, {...req.body.listing });
    req.flash("success", "Listing Is Deleted!");

    res.redirect(`/listings`);
}));








module.exports = router;