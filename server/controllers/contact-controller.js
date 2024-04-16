const Contact = require("../models/contact-model");

const contactForm = async (req, res) => { // Added req and res parameters
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ msg: "send successfully " });
  } catch (error) {
    return res.status(500).json({ msg: "internal server error" }); // Fixed typo in the error message
  }
};

module.exports = contactForm;
