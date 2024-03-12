const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const User = require("../models/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { isLoggedIn, isAdmin } = require("../middleware.js");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});


// router.post("/signup", wrapAsync(async(req, res) => {
//     try {
//         const { username, email, password } = req.body;
//         const newUser = new User({ email, username });
//         const registeredUser = await User.register(newUser, password);
//         console.log(registeredUser);
//         req.flash("success", "Successfully registered!");
//         res.redirect("/login");
//     } catch (err) {
//         console.error(err);
//         req.flash("error", "Failed to register user. Please try again.");
//         res.redirect("/signup"); // Redirect to signup page or handle the error accordingly
//     }
// }));

// user.js

router.post("/signup", wrapAsync(async(req, res) => {
    try {
        const { username, email, password, role } = req.body;
        // Create a new User object with the provided details
        const newUser = new User({ email, username, role }); // Include the selected role in the User object
        // Register the new user with Passport
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.flash("success", "Successfully registered!");
        res.redirect("/login");
    } catch (err) {
        console.error(err);
        req.flash("error", "Failed to register user. Please try again.");
        res.redirect("/signup");
    }
}));



router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});



router.post("/login", passport.authenticate("local", {
    failureRedirect: "/login", // Redirect to login page if authentication fails
    failureFlash: true // Enable flash messages for authentication failures
}), wrapAsync(async(req, res) => {
    try {
        // If authentication is successful, control reaches here
        // You can handle successful login logic here
        req.flash("success", "Successfully logged in!");
        res.redirect("/listings"); // Redirect to a dashboard or another appropriate route
    } catch (err) {
        // Handle any errors that occur during login
        console.error("Login error:", err);
        req.flash("error", "An error occurred during login. Please try again.");
        res.redirect("/login"); // Redirect back to the login page with an error flash message
    }
}));


// Define the logout route handler
router.get("/logout", isLoggedIn, (req, res, next) => {
    // Perform logout actions here, such as clearing session data
    req.logout((err) => {
        if (err) {
            return next(err); // Pass any errors to the error handling middleware
        }

        // Flash a logout message
        req.flash("success", "You have been successfully logged out.");

        // Redirect the user to the login page or any other page
        res.redirect("/listings"); // Redirect to the login page
    });
});


// Route for rendering user profile
router.get('/profile', isLoggedIn, async(req, res) => {
    try {
        // Find the current user by ID and populate the appliedSchemes field
        const user = await User.findById(req.user._id).populate('appliedSchemes');
        console.log(user);
        res.render('users/profile.ejs', { user });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});






module.exports = router;