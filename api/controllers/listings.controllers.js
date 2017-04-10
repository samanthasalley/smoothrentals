var mongoose    = require("mongoose"),
    Listing     = mongoose.model('Listing'),
    bcrypt      = require("bcrypt-nodejs"),
    jwt         = require("jsonwebtoken");

module.exports.listingsGetAll = function(req, res) {
    console.log('getting all listings');
    Listing
    	.find()
    	.exec(function(err, listings){
    		if(err){
    			res
    				.status(500)
    				.json(err);
    		}else{
    			res
    				.status(200)
    				.json(listings);
    		}
    	});
};

module.exports.listingsAddOne = function(req, res) {
    console.log('adding one listing');
    var newListing = {
        address1: req.body.address1,
	    address2: req.body.address2 || null,
	    city: req.body.city,
	    state: req.body.state,
	    country: req.body.country,
	    zip: req.body.zip,
	    rent: req.body.rent,
	    deposit: req.body.deposit,
	    leaseTerm: req.body.leaseTerm,
	    utilitiesIncl: req.body.utilitiesIncl,
	    dateAvailable: req.body.dateAvailable,
	    squareFt: req.body.squareFt || null,
	    pets: req.body.pets || null,
	    bedrooms: req.body.bedrooms,
	    bathrooms: req.body.bathrooms,
	    parking: req.body.parking || null,
	    amenities: req.body.amenities || null,
	    furnished: req.body.furnished || null,
	    description: req.body.description || null
    };
    
    Listing
        .create(newListing, function(err, listing){
            var response = {
                status : 201,
                message : {}
            };
            if(err){
                response.status = 500;
                response.message = err;
            } else {
                response.message = listing;
            }
            res
                .status(response.status)
                .json(response.message);
        });
};

module.exports.listingsGetOne = function(req, res) {
    console.log('getting one listing');
    var listId = req.params.listId;
    Listing
    	.findById(listId)
    	.exec(function(err, listing){
            var response = {
                status : 200,
                message : {}
            };
            if(err){
                response.status = 500;
                response.message = err;
            }else if(!listing){
                response.status = 404;
                response.message = "Listing ID not found";
            }else{
            	response.message = listing;
            }
            res
                .status(response.status)
                .json(response.message);
        });
};

module.exports.listingsUpdateOne = function(req, res) {
    console.log('updating one listing');
};

module.exports.listingsDeleteOne = function(req, res) {
    console.log('deleting one listing');
};