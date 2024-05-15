const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ msg: "Token is not provided" });
  }

  const token = authHeader.replace("Bearer ", "").trim();

  try {
    const isVerified = jwt.verify(token, process.env.SIGNATURE_KEY);

    const userData = await User.findOne({ email: isVerified.email }).select('-password');
    if (!userData) {
      return res.status(401).json({ msg: "User not found" });
    }

    req.user = userData;
    req.token = token;
    req.userID = userData._id;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ msg: "Token error" });
  }
};

module.exports = authMiddleware;
