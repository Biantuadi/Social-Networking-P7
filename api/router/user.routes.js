const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user.controller");
// const auth = require("../middleware/auth");

// Sign up and login routes
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/logout", userCtrl.logout);

 
//  
router.get("/", userCtrl.getAllUsers); //! admin only
router.get("/:id", userCtrl.getUser);
router.put("/:id", userCtrl.updateUser); 
router.delete("/:id", userCtrl.deleteUser); //! admin only

module.exports = router;
