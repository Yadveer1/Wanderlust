const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const revCon = require("../controllers/reviews.js");

const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");


//Post Review Route 
router.post("/", isLoggedIn, validateReview, wrapAsync(revCon.createReview));

//Delete Review Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(revCon.destroyReview));

module.exports = router;