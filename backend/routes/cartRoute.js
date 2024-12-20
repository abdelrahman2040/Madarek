<<<<<<< HEAD
const express = require("express");

const {
  addBookToCart,
  removeSpecificCartItem
} = require("../services/cartService");

const authService = require("../services/authService");
=======
const express = require('express');

const {
  addProductToCart,
  removeSpecificCartItem,
  clearCart,
} = require('../services/cartService');
const authService = require('../services/authService');
>>>>>>> b7138d88b9392c9e12a500889fc957fa8555f810

const router = express.Router();

router.use(authService.protect, authService.allowedTo('user'));
<<<<<<< HEAD
router.route("/").post(addBookToCart);

router.route("/:itemId").delete(removeSpecificCartItem);

module.exports = router;
=======
router
  .route('/')
  .post(addProductToCart)
  .delete(clearCart);

router
  .route('/:itemId')
  .delete(removeSpecificCartItem);

module.exports = router;
>>>>>>> b7138d88b9392c9e12a500889fc957fa8555f810
