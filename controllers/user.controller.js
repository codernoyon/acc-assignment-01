const fs = require('fs');
const userModels = require('../models/randomUser.model');

// get a random user
exports.getRandomUser = userModels.randomUser;

// get all user
exports.getAllUser = userModels.allUser;

// create a user
exports.createUser = userModels.savedUser;

// update a user details
exports.updateUser = userModels.updateUserInfo;

// update bulk user details
exports.updateBulkUser = userModels.userBulkUpdate;

exports.deleteUser = userModels.deleteAnUser;