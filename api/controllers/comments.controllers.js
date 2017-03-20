var mongoose    = require("mongoose"),
    Comment 	= mongoose.model('Comment'),
    bcrypt      = require("bcrypt-nodejs"),
    jwt         = require("jsonwebtoken");

module.exports.commentsGetAll = function(req, res) {
    console.log('getting all comments');
};

module.exports.commentsAddOne = function(req, res) {
    console.log('adding one comment');
};

module.exports.commentsGetOne = function(req, res) {
    console.log('getting one comment');
};

module.exports.commentsUpdateOne = function(req, res) {
    console.log('updating one comment');
};

module.exports.commentsDeleteOne = function(req, res) {
    console.log('deleting one comment');
};