var express             = require("express"),
    router              = express.Router(),
    ctrlUsers           = require("../controllers/users.controllers.js"),
    ctrlListings        = require("../controllers/listings.controllers.js"),
    ctrlComments        = require("../controllers/comments.controllers.js"),
    ctrlApplications    = require("../controllers/applications.controllers.js");
    
router
    .route('/listing')
    .get(ctrlListings.listingsGetAll)
    .post(ctrlListings.listingsAddOne);
    
router
    .route('/listing/:listId')
    .get(ctrlListings.listingsGetOne)
    .post(ctrlListings.listingsUpdateOne)
    .delete(ctrlListings.listingsDeleteOne);
    
router
    .route('/listing/:listId/apply')
    .get(ctrlApplications.applicationsGetAll)
    .post(ctrlApplications.applicationsAddOne);
    
router
    .route('/listing/:listId/apply/:appId')
    .get(ctrlApplications.applicationsGetOne)
    .post(ctrlApplications.applicationsUpdateOne)
    .delete(ctrlApplications.applicationsDeleteOne);
    
router
    .route('/listing/:listId/comments')
    .get(ctrlComments.commentsGetAll)
    .post(ctrlComments.commentsAddOne);
    
router
    .route('/listing/:listId/comments/:commentId')
    .get(ctrlComments.commentsGetOne)
    .post(ctrlComments.commentsUpdateOne)
    .delete(ctrlComments.commentsDeleteOne);


// Authentication Routes
router
    .route('/users')
    .get(ctrlUsers.usersGetAll)
    .post(ctrlUsers.usersAddOne);
router
    .route('/users/login')
    .get(ctrlUsers.usersGetOne);

router
    .route('/users/:userId')
    .post(ctrlUsers.usersUpdateOne)
    .delete(ctrlUsers.usersDeleteOne);
    
module.exports = router;