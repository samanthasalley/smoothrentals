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
    var listId = req.params.listId;

    Listing
        .findById(listId)
        .select("-listor -applications -comments")
        .exec(function(err, listing){
            var response = {
                status : 200,
                message : listing || null
            };
            if(err){
                response.status = 500;
                response.message = err;
            } else if(!listing){
                response.status = 404;
                response.message = "Listing ID not found";
            }
            if(response.status !== 200){
                res
                    .status(response.status)
                    .json(response.message);
            } else {
                listing.address1 = req.body.address1;
                listing.address2 = req.body.address2 || null;
                listing.city = req.body.city;
                listing.state = req.body.state;
                listing.country = req.body.country;
                listing.zip = req.body.zip;
                listing.rent = req.body.rent;
                listing.deposit = req.body.deposit;
                listing.leaseTerm = req.body.leaseTerm;
                listing.utilitiesIncl = req.body.utilitiesIncl;
                listing.dateAvailable = req.body.dateAvailable;
                listing.squareFt = req.body.squareFt || null;
                listing.pets = req.body.pets || null;
                listing.bedrooms = req.body.bedrooms;
                listing.bathrooms = req.body.bathrooms;
                listing.parking = req.body.parking || null;
                listing.amenities = req.body.amenities || null;
                listing.furnished = req.body.furnished || null;
                listing.description = req.body.description || null;
                
                listing.save(function(err, updatedListing){
                    if(err){
                        res
                            .status(500)
                            .json(err);
                    }else{
                        res
                            .status(204)
                            .json({success: true, listing: updatedListing});
                    }
                });
            }
        });
};

module.exports.listingsDeleteOne = function(req, res) {
    console.log('deleting one listing');
    var listId = req.params.listId;

    Listing
        .findById(listId)
        .exec(function(err, listing){
            var response = {
                status : 200,
                message : listing || null
            };
            if(err){
                response.status = 500;
                response.message = err;
            } else if(!listing){
                response.status = 404;
                response.message = "Listing ID not found";
            }
            if(response.status !== 200){
                res
                    .status(response.status)
                    .json(response.message);
            } else {
                listing.remove(function(err){
                    if(err){
                        res
                            .status(500)
                            .json(err);
                    }else{
                        res
                            .status(204)
                            .json({success: true, message: response.message});
                    }
                });
            }
    });
};

module.exports.listingGetAllApplications = function(req, res){
    console.log('getting all applications for listing');
    var listId = req.params.listId;

    Listing
        .findById(listId)
        .populate('applications')
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