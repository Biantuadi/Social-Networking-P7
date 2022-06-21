const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/posts.controller");

router.get("/", postCtrl.getPosts);
router.post("/", postCtrl.createPost);
router.put("/:id", postCtrl.updatePost);
router.delete("/:id", postCtrl.deletePost);


module.exports = router; 