const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const {checkUser, requireAuth} = require('./middleware/auth');

//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser()); 

//jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});

//connexion to mongoDB
require("./config/mongoDB");

//Routes
const userRouter = require("./router/user.routes");

app.use("/api/user", userRouter);

module.exports = app;
