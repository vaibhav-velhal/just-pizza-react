const express = require("express");
const router = express.Router();
const authService = require("./auth.service.js");

// Auth Login
router.post("/login", authService.loginUser);

// Auth Registration
router.post("/registration", authService.registerUser);


module.exports = router;