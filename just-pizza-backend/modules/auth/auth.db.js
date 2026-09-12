const userModel = require("../../models/user.model.js");
const authDb = {};

// Get user
authDb.login = function(db, value){
    // return db.collection("users").findOne(value);
    // return authModel.findOne({value});
    return userModel.findOne(value);
}

// Save user
authDb.addUser = function (db, userObj) {
    // return db.collection("users").insertOne(userObj);
    var newUser = new userModel(userObj);
    return newUser.save();  // .save() to save at Database
};

module.exports = authDb;