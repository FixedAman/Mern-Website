// home
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome TO My Website ");
  } catch (error) {
    console.log(error);
  }
};

// for registration
const register = async (req, res) => {
  try {
    res.status(200).send("welcome to registraion page 3");
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};

module.exports = { home, register };
