'use strict'

var router = require('express').Router();

var config = require('../config'),
    AuthController = require('../controllers/authController'),
    allowOnly = require('../services/routesHelper').allowOnly,
    UserController = require('../controllers/userController');
    // AdminController = require('../controllers/adminController');



var APIRoutes = function (app , passport) {

     // // TODO: Create API routes.

    router.get('/user', UserController.index);
    router.post('/signup', AuthController.signUp);
    router.post('/signin', AuthController.authenticateUser);
    router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, UserController.index));
    // router.get('/admin', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AdminController.index));


    app.use('/api', router);

};


module.exports = APIRoutes;