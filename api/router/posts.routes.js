const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/posts.controller");

router.get("/", postCtrl.getPosts);
router.post("/", postCtrl.createPost);
router.put("/:id", postCtrl.updatePost);
router.delete("/:id", postCtrl.deletePost);

router.patch("/like-post/:id", postCtrl.likePost);
router.patch("/unlike-post/:id", postCtrl.unlikePost); 

// comments
// router.patch("/comment-post/:id", postCtrl.commentPost); 
// router.patch("/update-comment/:id", postCtrl.updateComment);
// router.delete("/delete-comment/:id", postCtrl.deleteComment);



module.exports = router; 