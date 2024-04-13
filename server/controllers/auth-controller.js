// home
const home = async (req, res) => {
  try {
    res.status(200).json("Welcome TO My Website ");
  } catch (error) {
    console.log(error);
  }
};

// for registration
const register = async (req, res) => {
  try {
    console.log(req.body)
    res.status(200).json({msg: req.body});
  } catch (error) {
    res.status(500).json({ msg: "iternal server error" });
  }
};

module.exports = { home, register };
