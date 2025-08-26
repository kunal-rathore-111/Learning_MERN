
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth20").Strategy;
const userModel = require("./db/userModel");

require("./db/db");
const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: "http://localhost:5500",
    credentials: true
}))


app.use(session({
    secret: "SomethingCrazy",
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2Strategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/google/callback",
    },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await userModel.findOne({
                    googleId: profile.id
                });
                if (!user) {
                    user = await userModel.create({
                        googleId: profile.id,
                        displayName: profile.displayName,
                        email: profile.emails[0].value,
                        image: profile.photos[0].value,
                    });
                }
                return done(null, user);
            } catch (error) {
                return done(error, null);
            }
        }
    )
);


passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})

app.get('/auth/google', passport.authenticate("google", {
    scope: ["profile", "email"]
}));

app.get('/google/callback', passport.authenticate("google", {
    successRedirect: "http://localhost:5500/client/index.html",
    failureRedirect: "/auth/google"
}));

app.get("/logout", (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            next(err);
        }
        console.log("logged out");
        res.redirect("http://localhost:3000/logOutMessage");
    })
});

app.get('/logOutMessage', (req, res, next) => {
    res.send("Log out successfull");
})

app.get('/isloggedin', (req, res, next) => {  // used to manipulate DOM to load logout html
    if (req.user) {
        console.log(req.user);
        return res.status(200).json({ userData: req.user });
    }
    return res.status(404).json({ isLoggedIn: false });
})


app.listen(PORT, () => {
    console.log(`Server running on Port- ${PORT}`);
});