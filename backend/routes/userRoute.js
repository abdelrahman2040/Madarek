const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../services/userService");

const authService = require('../services/authService');
const router = express.Router();
router.use(authService.allowedTo('admin'));
router.use(authService.protect);
router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
