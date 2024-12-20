const express = require("express");

const {
  addBookToCart,
  removeSpecificCartItem
} = require("../services/cartService");

const authService = require("../services/authService");

const router = express.Router();

router.use(authService.protect, authService.allowedTo('user'));
router.route("/").post(addBookToCart);

router.route("/:itemId").delete(removeSpecificCartItem);
module.exports = router;
