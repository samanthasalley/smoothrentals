var mongoose = require("mongoose");

var listingSchema = new mongoose.Schema({
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    rent: {
        type: String,
        required: true
    },
    deposit: {
        type: String,
        required: true
    },
    leaseTerm: {
        type: String,
        required: true
    },
    utilitiesIncl: {
        type: String
    },
    dateAvailable: {
        type: String,
        required: true
    },
    squareFt: {
        type: Number
    },
    pets: {
        type: String
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    parking: {
        type: String
    },
    amenities: {
        type: String
    },
    furnished: {
        type: Boolean
    },
    description: {
        type: String
    },
    listor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Application"
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

mongoose.model('Listing', listingSchema);