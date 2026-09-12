const express = require("express");
const router = express.Router();
const userService = require("./user.service.js");


// Get users
router.get("/", userService.getAllUsers);

// Get one user by ID
router.get("/:userId", userService.getUserById);

// // Insert user
// router.post("/", userService.addUser);

// Delete user
router.delete("/:userId", userService.deleteUser);

// Update user
router.patch("/:userId", userService.updateUser);


module.exports = router;