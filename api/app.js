const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const { checkUser, requireAuth } = require("./middleware/auth");
const path = require("path");

//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//connexion to mongoDB
require("./config/mongoDB");
//path
app.use("/images", express.static(path.join(__dirname, "images")));

//Routes
const userRouter = require("./router/user.routes");
const postRouter = require("./router/posts.routes");

app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

module.exports = app;
