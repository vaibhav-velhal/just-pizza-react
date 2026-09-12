const userModel = require("../../models/user.model.js");
const userDb = {};
const { ObjectId } = require('mongoose').Types;

// Save user
// userDb.addUser = function (db, userObj) {
//     // return db.collection("users").insertOne(userObj);
//     var newUser = new userModel(userObj);
//     return newUser.save();  // .save() to save at Database
// };

// Find all users
userDb.getAllUsers = function (db) {
    // return db.collection("users").find({}).toArray();
    return userModel.find({});
};

// Find a single user
userDb.getUserById = function (db, userId) {
    // return db.collection("users").findOne({ _id: new ObjectId(userId)});
    return userModel.findOne({ _id: new ObjectId(userId)});
};

// Delete user
userDb.deleteUser = function (db, userId) {
    // return db.collection("users").deleteOne({ _id: new ObjectId(userId)});
    return userModel.deleteOne({ _id: new ObjectId(userId)});
};

// Update user
userDb.updateUser = function (db, userId, userObj) {
    // return db.collection("users").updateOne({ _id: new ObjectId(userId)}, { $set: userObj });
    return userModel.updateOne({ _id: new ObjectId(userId)}, { $set: userObj });
};

module.exports = userDb;