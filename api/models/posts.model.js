const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    posterId: { type: String, required: true },
    message: { type: String, required: true },
    imageUrl: { type: String },
    likes: { type: Number, default: 0 },
    comments: { type: Array },
    usersLiked: { type: Array },
    usersCommented: {
      type: [
        {
          commenterId: String,
          commenterName: String,
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
