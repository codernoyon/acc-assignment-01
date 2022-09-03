const fs = require('fs');
const { randomUser } = require('../models/randomUser.model');

// get a random user
exports.getRandomUser = randomUser;

// get all user
exports.getAllUser = (req, res) => {
    res.send("All user list")
}

// create a user
exports.createUser = (req, res) => {
    res.send("new user added")
}

// update a user details
exports.updateUser = (req, res) => {
    res.send("a user detail update")
}

// update bulk user details
exports.updateBulkUser = (req, res) => {
    res.send("a list of user details update")
}

exports.deleteUser = (req, res) => {
    res.send("a user deleted")
}