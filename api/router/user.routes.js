const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user.controller");
const auth = require("../middleware/auth");

// Sign up and login routes
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/logout", userCtrl.logout);

//
router.get("/", auth, userCtrl.getAllUsers);
router.get("/:id", auth, userCtrl.getUser);
router.put("/:id", auth, userCtrl.updateUser); 

module.exports = router;
