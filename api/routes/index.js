var express             = require("express"),
    router              = express.Router(),
    ctrlUsers           = require("../controllers/users.controllers.js"),
    ctrlListings        = require("../controllers/listings.controllers.js"),
    ctrlComments        = require("../controllers/comments.controllers.js"),
    ctrlApplications    = require("../controllers/applications.controllers.js");
    
router
    .route('/listings')
    .get(ctrlListings.listingsGetAll)
    .post(ctrlListings.listingsAddOne);
    
router
    .route('/listings/:listId')
    .get(ctrlListings.listingsGetOne)
    .post(ctrlListings.listingsUpdateOne)
    .delete(ctrlListings.listingsDeleteOne);

router
    .route('/listings/:listId/applications')
    .get(ctrlListings.listingGetAllApplications)
    .post(ctrlListings.listingsAddApplication);
    
router
    .route('/listings/:listId/applications/:appId')
    .get(ctrlApplications.applicationsGetOne)
    .post(ctrlApplications.applicationsUpdateOne)
    .delete(ctrlApplications.applicationsDeleteOne);
    
router
    .route('/listings/:listId/comments')
    .get(ctrlComments.commentsGetAll)
    .post(ctrlComments.commentsAddOne);
    
router
    .route('/listings/:listId/comments/:commentId')
    .get(ctrlComments.commentsGetOne)
    .post(ctrlComments.commentsUpdateOne)
    .delete(ctrlComments.commentsDeleteOne);


// Authentication Routes
router
    .route('/register')
    .post(ctrlUsers.usersAddOne);

router
    .route('/login')
    // .get(ctrlUsers.usersGetAll)
    .post(ctrlUsers.usersLoginOne);

router
    .route('/users/:userId')
    .get(ctrlUsers.usersGetOne)
    .post(ctrlUsers.usersUpdateOne)
    .delete(ctrlUsers.usersDeleteOne);

router
    .route('/user/userId/application')
    .get(ctrlApplications.applicationsGetOne)
    .post(ctrlApplications.applicationsAddOne);

router
    .route('/user/userId/application/:appId')
    .get(ctrlApplications.applicationsGetOne)
    .post(ctrlApplications.applicationsAddOne);
    
module.exports = router;