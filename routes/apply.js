// apply.js

const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn } = require("../middleware.js");
const UserUpload = require("../models/useruploads.js");
const ExpressError = require("../utils/ExpressError.js");
const { userUploadJoiSchema } = require('../schema.js');

// Middleware function to validate the request body for creating or updating a userUploadJoiSchema
const validateUserUploads = (req, res, next) => {
    // Validate the request body against the listing schema
    const { error } = userUploadJoiSchema.validate(req.body);

    // If there's an error, create an ExpressError and pass it to the error handler middleware
    if (error) {
        const errorDetails = error.details.map(d => d.message).join(', ');
        throw new ExpressError(400, `Validation error: ${errorDetails}`);
    } else {
        // If there's no error, proceed to the next middleware
        next();
    }
}


router.get("/:id/apply", isLoggedIn, wrapAsync(async(req, res) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id);
        if (!listing) {
            req.flash("error", "Listing you are requesting does not exist!");
            return res.redirect("/listings");
        }
        res.render("users/apply.ejs", { listing });
    } catch (error) {
        console.error(error);
        req.flash("error", "An error occurred while processing your request");
        res.redirect("/listings");
    }
}));

// router.post("/:id/apply", isLoggedIn, validateUserUploads, wrapAsync(async(req, res) => {
//     try {
//         const listing = await Listing.findById(req.params.id);
//         const schemeTitle = listing.title; // Get the title of the listing

//         const { applicantName, email, message } = req.body;

//         // Create a new user uploads object with the provided details
//         const newUserUploads = new UserUpload({
//             applicantName,
//             email,
//             message,
//             user: req.user._id // Adding the user ObjectId
//         });

//         // Save the new user uploads object to the database
//         await newUserUploads.save();

//         // Add the new user uploads object to the listing's useruploads array
//         listing.useruploads.push(newUserUploads);

//         // Save the updated listing object to the database
//         await listing.save();

//         // Add the title of the listing to the user's appliedSchemes array
//         req.user.appliedSchemes.push(schemeTitle); // Push only the title string

//         // Save the updated user object to the database
//         await req.user.save();

//         req.flash("success", "Application submitted successfully!");
//         res.redirect(`/listings/${req.params.id}`);
//     } catch (error) {
//         console.error(error);
//         req.flash("error", "An error occurred while processing your request");
//         res.redirect("/listings");
//     }
// }));


router.post("/:id/apply", isLoggedIn, validateUserUploads, wrapAsync(async(req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        const schemeTitle = listing.title; // Get the title of the listing

        const { applicantName, email, message } = req.body;

        // Create a new user uploads object with the provided details
        const newUserUploads = new UserUpload({
            applicantName,
            email,
            message,
            user: req.user._id // Adding the user ObjectId
        });

        // Save the new user uploads object to the database
        await newUserUploads.save();

        // Add the new user uploads object to the listing's useruploads array
        listing.useruploads.push(newUserUploads);

        // Save the updated listing object to the database
        await listing.save();

        // Add the title of the listing to the user's appliedSchemes array
        req.user.appliedSchemes.push(schemeTitle); // Push only the title string

        // Save the updated user object to the database
        await req.user.save();

        req.flash("success", "Application submitted successfully!");
        res.redirect(`/listings/${req.params.id}`);
    } catch (error) {
        console.error(error);
        req.flash("error", "An error occurred while processing your request");
        res.redirect("/listings");
    }
}));



module.exports = router;