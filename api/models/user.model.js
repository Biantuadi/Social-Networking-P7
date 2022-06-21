const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  pseudo: {
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
  bio: { type: String },
  imageUrl: {
    type: String,
    default:
      "https://img.myloview.fr/papiers-peints/humain-homme-personne-avatar-profil-utilisateur-vector-icon-illustration-700-80657983.jpg",
  },
  likes: {
    type: [String],
  },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
