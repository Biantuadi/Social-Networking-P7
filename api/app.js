const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { checkUser, requireAuth } = require("./middleware/auth");
const path = require("path");

//Middleware
app.use(express.json());
// app.use(cors());
app.use(cookieParser());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "POST , GET , OPTIONS , PUT , DELETE");

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

//jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

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
