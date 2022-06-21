const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user.controller");

// Sign up and login routes
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/lougout", userCtrl.logout);

// 
router.get("/", userCtrl.getAllUsers);
router.get("/:id", userCtrl.getUser);
router.put("/:id", userCtrl.updateUser);
router.delete("/:id", userCtrl.deleteUser);

module.exports = router;
