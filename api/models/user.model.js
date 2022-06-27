const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true, 
    },
    bio: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam impedit aliquam consequuntur odio amet eum accusamus explicabo corporis, est magni. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ea nulla a",
    },
    avatar: {
      type: String,
    },
  }, 
  { timestamps: true }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
