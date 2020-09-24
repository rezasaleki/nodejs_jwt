'use strict'

// 1: NPM dependencies.

var express = require('express'),
    bodyParser = require('body-parser'),
    morgan     = require('morgan'),
    sequelize  = require('sequelize'),
    passport   = require('passport'),
    path       = require('path'),
    cors       = require("cors"),
    errorHandler = require('./errors').errorHandler,
    jwt        = require('jsonwebtoken');



var corsOptions = {
    origin: "http://localhost:8080"
};

var hookJWTStrategy = require('./services/passportStrategy');

// 2: App related modules.
// ... Nothing here, yet!


// 3: Initializations.

var app = express();

var env = app.get('env') == 'development' ? 'dev' : app.get('env');
var port = process.env.PORT || 8080;


// 4: Parse as urlencoded and json.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// 5: Hook up the HTTP logger.
app.use(morgan('dev'));


app.use(cors(corsOptions));

// 6: Hook up Passport.
app.use(passport.initialize());

// Hook the passport JWT strategy.
hookJWTStrategy(passport);

// 7: Set the static files location.
app.use(express.static(__dirname + '../../public'));

// 8: Route Errors Handdle.

app.use(errorHandler);


// Bundle API routes.
require('./routes/api')(app , passport)


app.get('*', function (req, res) {
    res.status(404).send(`The Route ${req.path} Not Found !`);
});


app.listen(port , () => {
    console.log('Magic happens at http://localhost:8080/! We are all now doomed!')
});