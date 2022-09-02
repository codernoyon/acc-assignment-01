// get a random user
module.exports.getRandomUser = (req, res) => {
    res.send("A random user")
}

// get all user
module.exports.getAllUser = (req, res) => {
    res.send("All user list")
}

// create a user
module.exports.createUser = (req, res) => {
    res.send("new user added")
}

// update a user details
module.exports.updateUser = (req, res) => {
    res.send("a user detail update")
}

// update bulk user details
module.exports.updateBulkUser = (req, res) => {
    res.send("a list of user details update")
}

module.exports.deleteUser = (req, res) => {
    res.send("a user deleted")
}