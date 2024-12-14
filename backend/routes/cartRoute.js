const express = require('express');

const {
  addProductToCart,
  removeSpecificCartItem,
  clearCart,
} = require('../services/cartService');
const authService = require('../services/authService');

const router = express.Router();

router.use(authService.protect, authService.allowedTo('user'));
router
  .route('/')
  .post(addProductToCart)
  .delete(clearCart);

router
  .route('/:itemId')
  .delete(removeSpecificCartItem);

module.exports = router;