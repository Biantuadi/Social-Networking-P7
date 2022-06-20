const express = require("express");
const app = express();
const cors = require("cors");

//Middleware
app.use(express.json());
app.use(cors());

//connexion to mongoDB
require("./config/mongoDB");

//Routes
const userRouter = require("./router/user.routes");

app.use("/api/user", userRouter);

module.exports = app;
