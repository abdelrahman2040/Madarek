const express = require("express");

const {
  signup,
  login,
  //resetPassword,
} = require("../services/authService");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
//router.put('/resetPassword', resetPassword);

module.exports = router;
