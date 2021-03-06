// Application configuration.
'use strict';

var config = module.exports;

config.db = {
    user: 'root',
    password: '123!@#',
    name: 'james_auth'
};

config.db.details = {
    host: 'localhost',
    port: 80,
    dialect: 'mysql'
};

var userRoles = config.userRoles = {
    guest: 1,    // ...001
    user: 2,     // ...010
    admin: 4     // ...100
};

config.accessLevels = {
    guest: userRoles.guest | userRoles.user | userRoles.admin,    // ...111
    user: userRoles.user | userRoles.admin,                       // ...110
    admin: userRoles.admin                                        // ...100
};

config.keys = {
    secret: '/jVdfUX+u/Kn3qPY4+ahjwQgyV5UhkM5cdh1i2xhozE=' // Not anymore...
};