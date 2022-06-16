const express = require('express');
const app = express();
const cors = require('cors');

//Middleware
app.use(cors());
app.use(express.json());

//connexion to mongoDB
require('./db/mongoDB');

//Routes
const userRouter = require('./router/user');

app.use("/api/auth", userRouter);



module.exports = app;