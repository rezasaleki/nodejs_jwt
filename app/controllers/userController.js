'use strict';

var UserController = {
    index: function (req, res) {
        res.status(200).json({ message: `Welcome to the users area ' + ${req.method} + '!'` });
    }
};

module.exports = UserController;
