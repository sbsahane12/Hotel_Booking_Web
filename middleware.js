module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash("error", "You must be logged in to perform this operation");
        return res.redirect("/login");
    }
    next();
}

module.exports.isAdmin = (req, res, next) => {
    // Check if user is logged in
    if (!req.isAuthenticated()) {
        req.flash("error", "You must be logged in to perform this operation");
        return res.redirect("/login");
    }

    // Check if user is an admin
    if (req.user && req.user.role === 'admin') {
        // User is admin, proceed to next middleware
        return next();
    } else {
        // User is not an admin, redirect with error message
        req.flash("error", "You are not authorized to perform this operation");
        return res.redirect("back");
    }
};