const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const User = require("../models/user.js");
const { isLoggedIn, isAdmin } = require("../middleware.js");
const passport = require("passport");
const { userSchema } = require("../schema.js");
// Middleware function to validate the request body for creating or updating a user
const validateUser = (req, res, next) => {
    // Validate the request body against the listing schema
    const { error } = userSchema.validate(req.body);

    // If there's an error, create an ExpressError and pass it to the error handler middleware
    if (error) {
        const errorDetails = error.details.map(d => d.message).join(', ');
        throw new ExpressError(400, `Validation error: ${errorDetails}`);
    } else {
        // If there's no error, proceed to the next middleware
        next();
    }
}



// Admin route to view user information
router.get('/admin', isLoggedIn, isAdmin, async(req, res) => {
    try {
        // Fetch all users
        const users = await User.find().populate('appliedSchemes'); // Assuming 'appliedSchemes' is a field in the User model that contains references to applied schemes

        // Render the admin page with user information
        res.render('admin/user.ejs', { users });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Route to handle user deletion
router.post('/admin/delete/:id', isLoggedIn, isAdmin, async(req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        req.flash("success", "User deleted successfully!");
        res.redirect('/admin');
    } catch (err) {
        console.error(err);
        req.flash("error", "An error occurred while deleting the user");
        res.redirect('/admin');
    }
});





// Route to handle user editing (display edit form)
router.get('/admin/edit/:id', isLoggedIn, isAdmin, async(req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            req.flash("error", "User not found");
            return res.redirect('/admin');
        }
        res.render('admin/editUser.ejs', { user });
    } catch (err) {
        console.error(err);
        req.flash("error", "An error occurred while editing the user");
        res.redirect('/admin');
    }
});

// Route to handle user editing (process form submission)
router.put('/admin/edit/:id', isLoggedIn, isAdmin, async(req, res) => {
    try {
        const { id } = req.params;
        const { username, email, role } = req.body;
        await User.findByIdAndUpdate(id, { username, email, role });
        req.flash("success", "User updated successfully!");
        res.redirect('/admin');
    } catch (err) {
        console.error(err);
        req.flash("error", "An error occurred while updating the user");
        res.redirect('/admin');
    }
});




// Route to display the form to add a new user
router.get('/admin/add', isLoggedIn, isAdmin, async(req, res) => {
    res.render('admin/addUser.ejs');
});

// Route to handle the form submission for adding a new user
router.post('/admin/add', isLoggedIn, isAdmin, validateUser, async(req, res) => {
    try {
        const { username, email, password, role } = req.body;
        // Create the new user
        const user = new User({ username, email, role });
        // Register the user with the provided password
        await User.register(user, password);
        req.flash("success", "User added successfully!");
        res.redirect('/admin');
    } catch (err) {
        console.error(err);
        req.flash("error", "An error occurred while adding the user");
        res.redirect('/admin/add');
    }
});

module.exports = router;