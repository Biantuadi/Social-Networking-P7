const Post = require("../models/posts.model");
const userModel = require("../models/user.model");
const objectId = require("mongodb").ObjectID;

exports.createPost = async (req, res) => {
  const newPost = new Post({
    ...req.body,
  });
  newPost
    .save()
    .then(() => res.json("Post created!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updatePost = async (req, res) => {
  Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deletePost = async (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json("Post deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getPosts = async (req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
};

// ^\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

exports.likePost = async (req, res) => {
  Post.findByIdAndUpdate(
    req.params.id,
    {
      $push: { likes: req.params.id },
    },
    { new: true }
  )
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error: " + err));

  userModel
    .findByIdAndUpdate(
      req.body.userId,
      {
        $push: { likedPosts: req.params.id },
      },
      { new: true }
    )
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.unlikePost = async (req, res) => {
  Post.findByIdAndUpdate(
    req.params.id,
    {
      $pull: { likes: req.params.id },
    },
    { new: true }
  )
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error: " + err));

  userModel
    .findByIdAndUpdate(
      req.body.userId,
      {
        $pull: { likedPosts: req.params.id },
      },
      { new: true }
    )
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
};

// ^\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

exports.commentPost = async (req, res) => {
  Post.findByIdAndUpdate(
    req.params.id,
    { $push: { comments: req.body } },
    { new: true }
  )
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateComment = async (req, res) => {}
