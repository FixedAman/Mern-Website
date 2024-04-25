const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate.middleware");
const loginSchema = require("../validators/auth-validator");
router.route("/").get(authcontrollers.home);

router
  .route("/registration")
  .post(authcontrollers.register);

router.route("/login").post(authcontrollers.login);

module.exports = router;