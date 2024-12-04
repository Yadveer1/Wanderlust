const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js")

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
            type: String,
            default: "defaultimage"
        },
        url: {
            type: String,
            default: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
            set: (v) => v === "" ? "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg" : v,
        },
    },
    price: Number,
    location: String,
    country: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review",
    }] ,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    // geometery: {
    //     type: {
    //       type: String, // Don't do `{ location: { type: String } }`
    //       enum: ['Point'], // 'location.type' must be 'Point'
    //       required: true
    //     },
    //     coordinates: {
    //       type: [Number],
    //       required: true
    //     }
    // },
})

listingSchema.post("findOneAndDelete", async (listing) =>{
    if(listing) {
        await Review.deleteMany({_id : {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;