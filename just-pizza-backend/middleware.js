const jwt = require("jsonwebtoken");
const middleware = {};

// Request Middleware
// Auth Middleware
middleware.auth = function(req, res, next){
    var token = req.headers.authorization ? req.headers.authorization : null;
    if(token){
        const jwtSecret = process.env.JWT_TOKEN_SECRET
        token = token.replace("Bearer ", "");
        jwt.verify(token, jwtSecret, function(error, decoded){
            if(error){
                res.status(403).send("Access forbidden!").end();
                return;
            } else {
                req.headers.userId = decoded.userId;
                next();
            }
        });
    } else{
        res.status(403).json({ msg: "Invalid token!"}).end();
        return;
    }
};

// Response Middleware
middleware.resp = function(error, req, res, next) {
    console.log(`[!!!] Error occurred - ${error.message}`);
    res.status(500).json({msg: "Something went wrong, please try later."});
};

module.exports = middleware;