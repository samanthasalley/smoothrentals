var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true
    },
    datesRented: {
        type: String
    },
    notes: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

mongoose.model('Comment', commentSchema);