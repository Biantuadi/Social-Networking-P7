const express = require('express');
const app = express();
const cors = require('cors');

//Middleware
app.use(cors());
app.use(express.json());

//connexion to mongoDB
require('./db/mongoDB');

//Routes



module.exports = app;