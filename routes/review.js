const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const { isLoggedIn, isAdmin } = require("../middleware.js");
//validate the correct review

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);

    if (error) {
        const errorDetails = error.details.map(d => d.message).join(', ');
        throw new ExpressError(400, `Validation error: ${errorDetails}`);
    } else {
        next();
    }
}



//reviews route
router.post("/", isLoggedIn, validateReview, wrapAsync(async(req, res) => {
    const listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Is Added!");
    res.redirect(`/listings/${req.params.id}`);

}));

//delete review route

router.delete("/:reviewId", isLoggedIn, isAdmin, wrapAsync(async(req, res) => {

    let { id, reviewId } = req.params;

    //to delet spacfic review form listing.reviews array
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    // to delet spacific reviev from reviews collection
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Is Deleted!");
    res.redirect(`/listings/${id}`);

}));

module.exports = router;