const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");

router.get("/", authcontrollers.home);
router.post("/registration", authcontrollers.register);
router.post("/login", authcontrollers.login);

module.exports = router;
