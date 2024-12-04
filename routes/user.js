const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userCon = require("../controllers/user.js");

router.route("/signup")
.get(userCon.renSignup )
.post(wrapAsync(userCon.signup))

router.route("/login")
.get(userCon.renLogin)
.post(saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login", 
        failureFlash: true,
    }),
    userCon.login
)

router.get("/logout", userCon.logout);

module.exports = router;