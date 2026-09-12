const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
// const session = require("express-session");
const router = express.Router();
const mongoDbConn = require("./config/mongodb.connect.js");
const middleware = require("./middleware.js");
const authRoutes = require("./modules/auth/auth.routes.js");
const userRoutes = require("./modules/users/user.routes.js");


app.use(express.json());

app.use(cors());

// ***** Session Management ***** //
// app.use(
//     session({
//         secret: process.env.SESSION_SECRET,
//         resave: false,
//         saveUninitialized: false,
//         cookie: {
//             secure: false,
//             // maxAge: 5000
//         },
//     }),
// );

// // Set session
// router.post('/set-session', function(req, res){
//     var userId = req.body.userId;
//     req.session.userId = userId;
//     res.status(200).send("User ID is saved into the session.");
// });

// // Get session
// router.get('/get-session', function(req, res){
//     var userId = req.session.userId;
//     console.log(req.session.id);
//     res.status(200).send(`The User ID is ${userId}.`)
// });
// *************************************************** //


// Routes
// auth
router.use("/api/auth", authRoutes);

// User route
router.use("/api/user", middleware.auth, userRoutes);


// Response middleware
router.use(middleware.resp);


app.use(router);


// Run server
mongoDbConn
    .then(function(db){
        app.locals.db = db.connection;
        console.log("[>>>] Connected to DB.");        
        app.listen(3000, function(){
            console.log("[>>>] The server is up and running...");
        });
    }).catch(function(error){
        console.log(error);
    });