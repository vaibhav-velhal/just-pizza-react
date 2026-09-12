const joi = require("joi");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const authDb = require("./auth.db.js");

const authService = {};

// Login User
authService.loginUser = function(req, res, next){
    try{
        const db = req.app.locals.db;
        const reqBody = req.body;

        const schema = joi.object({
            email: joi.string().email().required(),
            password: joi.string().min(8).max(12).required()
        });

        const {error, value} = schema.validate(reqBody);

        if(error){
            res.status(403).json({msg: "Access forbidden"}).end();
            return;
        }

        value.password = md5(value.password);

        const jwtSecret = process.env.JWT_TOKEN_SECRET

        authDb.login(db, value)
            .then(function(userData){
                var token = jwt.sign({ 
                    userId: userData._id.toString()}, 
                    jwtSecret,
                    { expiresIn: "1d" }
                );
                res.status(200).json({
                    token,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    userId: userData._id.toString()
                });
            })
            .catch(function(error){
                res.status(404).json({msg: "Username or Password is incorrect!"});
            });
    } catch(error) {
        next(error);
    }
};


// Registrater User
authService.registerUser = function(req, res, next) {
    try {
        const db = req.app.locals.db;
        const reqBody = req.body;


        const schema = joi.object({
            firstName: joi.string().pattern(/^[A-Za-z ]+$/).min(2).max(20).required(),
            lastName: joi.string().pattern(/^[A-Za-z ]+$/).min(2).max(20).required(),
            phone: joi.string().pattern(/^[0-9]{10}$/).required(),
            email: joi.string().email().required(),
            password: joi.string().min(8).max(12)
        });

        var { error, value } = schema.validate(reqBody);

        if (error) {
            console.log(error);
            res.status(400).json({msg: "Invalid request"}).end();
            return;
        }

        value.password = md5(value.password);

        authDb.addUser(db, value)
            .then(function(output){
                res.status(201).json({msg: "User has inserted successfully!"}).end();
            })
            .catch(function (error) {
                console.log(error);
                if (error.code === 11000) {
                    res.status(409).json({
                        msg: "Email already exists"
                    }).end();
                    return;
                }

                next(error);
            });
    } catch(error) {
        next(error);
    }
}

module.exports = authService;