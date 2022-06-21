const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    posterId: { type: String, required: true },
    message: { type: String, required: true },
    picture: { type: String },
    video: { type: String },
    likes: { type: Array },
    comments: { type: Array },
    usersLiked: { type: Array },
    usersCommented: {
      type: [
        {
          commenterId: String,
          commenterPseudo: String,
          comment: String,
          timestamp: Number,
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);