const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
// Home route
const home = async (req, res) => {
  try {
    res.status(200).json("Welcome to My Website");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal server error" });
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
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: "registration sucessful",
      token: await userCreated.generateToken(),
      userID: userCreated._id.toString(),
    });
  } catch (error) {
    next(error);
    // res.status(500).json({ msg: "Internal server error" });
  }
};

// User  login  section

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (!userExist) {
      return res.status(400).json({ msg: "invalid crediantials " });
    }
    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "login sucessful",
        token: await userExist.generateToken(),
        userID: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = { home, register, login };
