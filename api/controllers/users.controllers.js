var mongoose    = require("mongoose"),
    bcrypt      = require("bcrypt-nodejs"),
    User        = mongoose.model('User'),
    jwt         = require("jsonwebtoken");

// module.exports.usersGetAll = function(req, res) {
//     console.log('getting all users');
// };

module.exports.usersAddOne = function(req, res) {
    console.log('registering user');
    var newUser = {};
        newUser.firstName = req.body.firstName || null;
        newUser.lastName = req.body.lastName || null;
        newUser.email = req.body.email;
        newUser.username = req.body.username;
        newUser.password = req.body.password;
        
    User.create({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        username: newUser.username,
        password: bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(10))
    }, function(err, user){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }else{
            console.log('user created', user);
            res.status(201).json(user);
        }
    });
};

module.exports.usersLoginOne = function(req, res) {
    console.log('logging in user');
    console.log('curUser: username - ' + req.body.username + ', password - ' + req.body.password);
    var curUser = {};
        curUser.username = req.body.username;
        curUser.password = req.body.password;
        
    User.findOne({
        username: curUser.username
    }).exec(function(err, user){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }else{
            console.log('found user', user);
            if(bcrypt.compareSync(curUser.password, user.password)){
                console.log('password match!', user);
                var token = jwt.sign({ username: user.username }, 's3cr3t', { expiresIn: 3600 });
                res.status(200).json({ success: true, token: token, user:user });
            }else{
                res.status(401).json('Unauthorized');
            }
        }
    });
};

module.exports.usersGetOne = function(req, res) {
    console.log('getting one user');
};

module.exports.usersUpdateOne = function(req, res) {
    console.log('updating one user');
    var curUser = {};
        curUser.username = req.body.username;
        curUser.password = req.body.currentPassword;
        
    var newPassword = req.body.newPassword;
        
    User.findOne({
        username: curUser.username
    }).exec(function(err, user){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }else{
            if(bcrypt.compareSync(curUser.password, user.password)){
                console.log('user found!', user);
                user.password = bcrypt.hashSync(newPassword, bcrypt.genSaltSync(10));
                user.save(function(err, updatedUser){
                    if(err){
                        res
                            .status(500)
                            .json(err);
                    }else{
                        var token = jwt.sign({ username: updatedUser.username }, 's3cr3t', { expiresIn: 3600 });
                        res
                            .status(204)
                            .json({ success: true, token: token });
                    }
                });
            }else{
                res.status(401).json('Unauthorized');
            }
        }
    });
};

module.exports.usersDeleteOne = function(req, res) {
    console.log('deleting one user');
    var username = req.body.username;
    var password = req.body.password;
    var userId = req.params.id;

    User.findOne({
        username: curUser.username
    }).exec(function(err, user){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }else{
            if(bcrypt.compareSync(curUser.password, user.password)){
                console.log('user found!', user);
                user.remove()
                user.password = bcrypt.hashSync(newPassword, bcrypt.genSaltSync(10));
                user.save(function(err, updatedUser){
                    if(err){
                        res
                            .status(500)
                            .json(err);
                    }else{
                        var token = jwt.sign({ username: updatedUser.username }, 's3cr3t', { expiresIn: 3600 });
                        res
                            .status(204)
                            .json({ success: true, token: token });
                    }
                });
            }else{
                res.status(401).json('Unauthorized');
            }
        }
    });


    User.findByIdAndRemove(req.params.id, function(err){
        if(err){
            req.flash('error', 'Campground not found');
            res.redirect('/campgrounds');
        }else{
            res.redirect('/campgrounds');
        }
    });
};

// Middleware to check for and validate jwt token
module.exports.authenticate = function(req, res, next){
    var headerExists = req.headers.authorization;
    if(headerExists) {
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, 's3cr3t', function(err, decoded){
            if(err){
                console.log(err);
                res.status(401).json('Unauthorized');
            }else{
                req.user = decoded.username;
                next();
            }
        });
    }else{
        res.status(403).json('No token provided');
    }
};