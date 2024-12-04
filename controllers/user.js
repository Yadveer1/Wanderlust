const User = require("../models/user.js");

module.exports.renSignup = (req,res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async(req,res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        let registeredUser = await User.register(newUser, password);
        // console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success","Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    } catch(err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};
module.exports.renLogin = (req,res) => {
    res.render("users/login.ejs");
};
module.exports.login = async(req,res) => {
    req.flash("success","Welcome back to Wanderlust!");
    res.redirect(res.locals.redirectUrl);
};
module.exports.logout = (req,res,next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "you are logged out! ");
        res.redirect("/listings");
    });
};