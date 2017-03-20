var mongoose    	= require("mongoose"),
    Application 	= mongoose.model('Application'),
    bcrypt      	= require("bcrypt-nodejs"),
    jwt         	= require("jsonwebtoken");

module.exports.applicationsGetAll = function(req, res) {
    console.log('getting all applications');
};

module.exports.applicationsAddOne = function(req, res) {
    console.log('adding one application');
};

module.exports.applicationsGetOne = function(req, res) {
    console.log('getting one application');
};

module.exports.applicationsUpdateOne = function(req, res) {
    console.log('updating one application');
};

module.exports.applicationsDeleteOne = function(req, res) {
    console.log('deleting one application');
};