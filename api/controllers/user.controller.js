const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config/.env" });
const fs = require("fs");

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
        .catch((err) => {
          if (err.message.includes("name"))
            res.status(409).json({ error: err, name: "Nom déjà pris !" });

          if (err.message.includes("email"))
            res.status(409).json({ error: err, email: "Email déjà utilisé !" });
        });
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
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, process.env.JWT_KEY),
          });
        })
        .catch((err) => res.status(500).json({ error: err }));
    })
    .catch((err) => res.status(500).json({ error: err }));
};

exports.logout = (req, res, next) => {
  const removeToken = localStorage.removeItem("token");
  const removeUserId = localStorage.removeItem("userId");
  if (removeToken && removeUserId) {
    res.status(200).json({ message: "Déconnexion réussie !" });
  } else {
    res.status(401).json({ message: "Vous n'êtes pas connecté !" });
  }


};

//? `\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

exports.updateUser = (req, res, next) => {
  if (req.file) {
    const image = req.file.filename;
    const user = new User({
      ...req.body,
      avatar: image,
    });
    user
      .save()
      .then(() => res.status(201).json({ message: "Utilisateur modifié !" }))
      .catch((err) => {
        if (err.message.includes("name"))
          res.status(409).json({ error: err, name: "Nom déjà pris !" });

        if (err.message.includes("email"))
          res.status(409).json({ error: err, email: "Email déjà utilisé !" });
      }).catch((err) => res.status(500).json({ error: err }));
  }
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
