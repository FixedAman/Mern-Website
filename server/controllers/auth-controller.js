const User = require("../models/user-model");

// Home route
const home = async (req, res) => {
  try {
    res.status(200).json("Welcome to My Website");
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

// Registration route
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Create new user
    const userCreated = await User.create({ username, email, phone, password });

    res.status(200).json({ msg: userCreated });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = { home, register };
