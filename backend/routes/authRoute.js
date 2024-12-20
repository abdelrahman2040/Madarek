<<<<<<< HEAD
const express = require("express");
=======
const express = require('express');
>>>>>>> b7138d88b9392c9e12a500889fc957fa8555f810

const {
  signup,
  login,
<<<<<<< HEAD
  //resetPassword,
} = require("../services/authService");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
//router.put('/resetPassword', resetPassword);
=======
  resetPassword,
} = require('../services/authService');

const router = express.Router();

router.post('/signup',  signup);
router.post('/login',  login);
router.put('/resetPassword', resetPassword);
>>>>>>> b7138d88b9392c9e12a500889fc957fa8555f810

module.exports = router;
