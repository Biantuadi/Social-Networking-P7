const jwt = require("jsonwebtoken");

export const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "User ID non valide";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ error: error });
  }
};
