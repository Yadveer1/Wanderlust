const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const lisCon = require("../controllers/listing.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});



router
.route("/")
.get(wrapAsync(lisCon.index)) // Display
.post(isLoggedIn, upload.single('listing[image][url]'), validateListing, wrapAsync(lisCon.createListing)); //Create Route


//New Route
router.get("/new", isLoggedIn, lisCon.renderNewForm);

router.route("/:id")
.get(wrapAsync(lisCon.showListing)) //Show Route
.put(isLoggedIn, isOwner, upload.single('listing[image][url]'), validateListing, wrapAsync(lisCon.updateListing)) //Update Route
.delete(isOwner, wrapAsync(lisCon.destroyListing)) //Delete Route


//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(lisCon.editListing));

module.exports = router;