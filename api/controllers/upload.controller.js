const UserModel = require("../models/user.model");
// const fs = require("fs");

exports.uploadProfil = (req, res) => {
  //! TODO: upload image to cloudinary
  const thing = new UserModel({
    avatar: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
  });
  thing
    .save()
    .then(() => {
      res.status(201).json({ message: "Thing created!" });
    })
    .catch((err) => {
      res.status(404).json({ message: err });
    });
};
