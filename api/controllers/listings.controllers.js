var mongoose    = require("mongoose"),
    Listing     = mongoose.model('Listing'),
    bcrypt      = require("bcrypt-nodejs"),
    jwt         = require("jsonwebtoken");

module.exports.listingsGetAll = function(req, res) {
    console.log('getting all listings');
};

module.exports.listingsAddOne = function(req, res) {
    console.log('adding one listing');
};

module.exports.listingsGetOne = function(req, res) {
    console.log('getting one listing');
};

module.exports.listingsUpdateOne = function(req, res) {
    console.log('updating one listing');
};

module.exports.listingsDeleteOne = function(req, res) {
    console.log('deleting one listing');
};