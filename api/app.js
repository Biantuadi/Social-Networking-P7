const express = require("express");
const app = express();
const cors = require("cors");

//Middleware
app.use(express.json());
// app.use(cors());
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3001");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//connexion to mongoDB
require("./db/mongoDB");

//Routes
const userRouter = require("./router/user");

app.use("/api/auth", userRouter);

module.exports = app;
