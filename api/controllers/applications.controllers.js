var mongoose    	= require("mongoose"),
    Application 	= mongoose.model('Application'),
    bcrypt      	= require("bcrypt-nodejs"),
    jwt         	= require("jsonwebtoken");

module.exports.applicationsGetAll = function(req, res) {
    console.log('getting all applications');
    Application
    	.find()
    	.exec(function(err, apps){
    		if(err){
    			res
    				.status(500)
    				.json(err);
    		}else{
    			res
    				.status(200)
    				.json(apps);
    		}
    	});
};

module.exports.applicationsAddOne = function(req, res) {
    console.log('adding one application');
    var newApp = {
    	primaryApplicant: {
    		firstName: req.body.firstName,
	    	lastName: req.body.lastName,
	    	email: req.body.email,
	    	currentAddress: {
	    		street: req.body.street,
	    		street2: req.body.street2 || null,
	    		city: req.body.city,
	    		state: req.body.state,
	    		country: req.body.country,
	    		zip: req.body.zip,
	    		timeLived: req.body.timeLived
	    	}
    	}
    };
    
    Application
        .create(newApp, function(err, app){
            var response = {
                status : 201,
                message : {}
            };
            if(err){
                response.status = 500;
                response.message = err;
            } else {
                response.message = app;
            }
            res
                .status(response.status)
                .json(response.message);
        });
};

module.exports.applicationsGetOne = function(req, res) {
    console.log('getting one application for appId: ' + req.params.appId);
    var appId = req.params.appId;

    Application
    	.findById(appId)
    	.exec(function(err, app){
    		var response = {
    			status: 200,
    			message: {}
    		};
    		if(err){
    			response.status = 500;
    			response.message = err;
    		}else if(!app){
    			response.status = 404;
    			response.message = 'Application ID not found';
    		}else{
    			response.message = app;
    		}
    		res
    			.status(response.status)
    			.json(response.message);
    	});
};

module.exports.applicationsUpdateOne = function(req, res) {
    console.log('updating one application');
    var appId = req.params.appId;

    Application
        .findById(appId)
        .select("-user")
        .exec(function(err, app){
            var response = {
                status : 200,
                message : {}
            };
            if(err){
                response.status = 500;
                response.message = err;
            } else if(!app){
                response.status = 404;
                response.message = "Application ID not found";
            }
            if(response.status !== 200){
                res
                    .status(response.status)
                    .json(response.message);
            } else {
            	app.primaryApplicant.firstName = req.body.firstName;
		    	app.primaryApplicant.lastName = req.body.lastName;
		    	app.primaryApplicant.email = req.body.email;
		    	app.primaryApplicant.currentAddress.street = req.body.street;
	    		app.primaryApplicant.currentAddress.street2 = req.body.street2 || null;
	    		app.primaryApplicant.currentAddress.city = req.body.city;
	    		app.primaryApplicant.currentAddress.state = req.body.state;
	    		app.primaryApplicant.currentAddress.country = req.body.country;
	    		app.primaryApplicant.currentAddress.zip = req.body.zip;
	    		app.primaryApplicant.currentAddress.timeLived = req.body.timeLived;
                
                app.save(function(err, updatedApp){
                    if(err){
                        res
                            .status(500)
                            .json(err);
                    }else{
                        res
                            .status(204)
                            .json({success: true, app: updatedApp});
                    }
                });
            }
        });
};

module.exports.applicationsDeleteOne = function(req, res) {
    console.log('deleting one application');
};