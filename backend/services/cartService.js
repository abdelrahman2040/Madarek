const asyncHandler = require('express-async-handler');
const Book = require('../models/bookModel');
const Cart = require('../models/cartModel');

const calcTotalCartPrice = (cart) => {
  let totalPrice = 0;
  cart.cartItems.forEach((item) => {
    totalPrice += item.quantity * item.price;
  });
  cart.totalCartPrice = totalPrice;
  cart.totalPriceAfterDiscount = undefined;
  return totalPrice;
};
// Add Book To Cart
exports.addBookToCart = asyncHandler(async (req, res, next) => {
  const { bookId, color } = req.body;

  const book = await Book.findById(bookId);
  if (!book) {
    return res.status(404).json({ status: 'fail', message: 'Book not found' });
  }

  let cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    cart = await Cart.create({
      user: req.user._id,
      cartItems: [{ book: bookId, color, price: book.price }],
    });
  } else {
    const bookIndex = cart.cartItems.findIndex(
      (item) => item.book.toString() === bookId && item.color === color
    );

    if (bookIndex > -1) {
      cart.cartItems[bookIndex].quantity += 1;
    } else {
      cart.cartItems.push({ book: bookId, color, price: book.price });
    }
  }

  calcTotalCartPrice(cart);
  await cart.save();

  res.status(200).json({
    status: 'success',
    message: 'Book added to cart successfully',
    numOfCartItems: cart.cartItems.length,
    data: cart,
  });
});

// Remove Specific Cart Item
exports.removeSpecificCartItem = asyncHandler(async (req, res, next) => {
  const cart = await Cart.findOneAndUpdate(
    { user: req.user._id },
    { $pull: { cartItems: { _id: req.params.itemId } } },
    { new: true }
  );

  if (!cart) {
    return res.status(404).json({ status: 'fail', message: 'Cart not found' });
  }

  if (cart.cartItems.length > 0) {
    calcTotalCartPrice(cart);
    await cart.save();
  } else {
    cart.totalCartPrice = 0;
    cart.totalPriceAfterDiscount = undefined;
    await cart.save();
  }

  res.status(200).json({
    status: 'success',
    numOfCartItems: cart.cartItems.length,
    data: cart,
  });
});
