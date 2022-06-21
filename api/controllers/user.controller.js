const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config/.env" });

// Authentication middleware

exports.signup = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((err) =>
          res.status(409).json({ massage: "Utilisateur pas enregistrer", err })
        );
    })
    .catch((err) => res.status(500).json({ error: err }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ email: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ password: "Mot de passe incorrect !" });
          }
          res.cookie(
            "token",
            jwt.sign({ userId: user._id }, process.env.JWT_KEY, {
              expiresIn: "24h",
            }),
            { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 }
          );
          res.status(200).json({
            userId: user._id,
          });
        })
        .catch((err) => res.status(500).json({ error: err }));
    })
    .catch((err) => res.status(500).json({ error: err }));
};

exports.logout = (req, res, next) => {
  res.clearCookie("token", "", { maxAge: 1 });
  res.status(200).json({ message: "Vous êtes déconnecté" });
  // res.redirect("/");
};

//? `\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

exports.deleteUser = (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({ error: err }));
};

exports.updateUser = (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  )
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({ error: err }));
};

exports.getUser = (req, res, next) => {
  User.findById(req.params.id)
    .select("-password")
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({ error: err }));
};

exports.getAllUsers = (req, res, next) => {
  User.find()
    .select("-password")
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({ error: err }));
};
