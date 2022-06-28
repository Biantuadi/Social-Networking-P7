const UserModel = require("../models/user.model");
const fs = require("fs");

exports.uploadProfil = (req, res) => {
  if (req.file != null) {
    UserModel.findOne({ _id: req.body.userId })
      .then((user) => {
        const filename = user.avatar.split("/images/")[1];
        fs.unlink(`images/${filename}`, (err) => {
          UserModel.findOneAndUpdate(
            { _id: req.body.userId },
            {
              $set: {
                avatar: `${req.protocol}://${req.get("host")}/images/${
                  req.file.filename
                }`,
              },
            }
          )
            .then((user) => {
              res.send(user);
            })
            .catch((err) => {
              res.json(err);
            });
        });
      })
      .catch((err) => {
        res.json(err);
      });
  }
};
