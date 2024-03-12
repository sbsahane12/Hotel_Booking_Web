const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
// Importing routes for document services and reviews
const listingsRoutes = require("./routes/listing.js");
const reviewsRoutes = require("./routes/review.js");
const userRoutes = require("./routes/user.js");
const applyRoutes = require("./routes/apply.js");
const adminRoutes = require('./routes/adminRoutes');


// MongoDB connection URL
const MONGO_URL = "mongodb+srv://sagar:sagar123@cluster0.kncywn0.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB
async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
}

main().catch(console.error);

// App configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


const sessionOptions = {
    secret: 'mysupersecretecode',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}

// Root route
app.get("/", (req, res) => {
    res.send("Hi, welcome to our online cyber cafe offering services for the 20 most popular documents in India.");
});

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next();
});





// const adminUsername = 'admin';
// const adminEmail = 'admin@example.com';
// const adminPassword = 'adminPassword'; // Replace with a secure password

// // Create the admin user
// User.register({ username: adminUsername, email: adminEmail, role: 'admin' }, adminPassword, (err, user) => {
//     if (err) {
//         console.error('Error creating admin user:', err);
//     } else {
//         console.log('Admin user created successfully:', user);
//     }
// });




// Document services routes
app.use("/listings", listingsRoutes);

// Reviews routes
app.use("/listings/:id/reviews", reviewsRoutes);



app.use("/", userRoutes);

// Apply routes
app.use("/listings", applyRoutes);

app.use('/', adminRoutes);



app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
})

app.use((err, req, res, next) => {
    let { status = 500, message = "Somting Went Wrong" } = err;
    // res.status(status).send(message);
    res.render("error.ejs", { err });

})


app.listen(8080, () => {
    console.log("Listening on port 8080");
})