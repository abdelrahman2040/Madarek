const asyncHandler = require('express-async-handler');
const Product = require('../models/bookModel');
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

//add Book To Cart
exports.addBookToCart = asyncHandler(async (req, res, next) => {
    const { bookId, color } = req.body;
    const book = await Book.findById(productId);
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
        const cartItem = cart.cartItems[bookIndex];
        cartItem.quantity += 1;
  
        cart.cartItems[bookIndex] = cartItem;
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

//clear Cart
  exports.clearCart = asyncHandler(async (req, res, next) => {
    await Cart.findOneAndDelete({ user: req.user._id });
    res.status(204).send();
  });
  
//remove Specific CartItem
  exports.removeSpecificCartItem = asyncHandler(async (req, res, next) => {
    const cart = await Cart.findOneAndUpdate(
      { user: req.user._id },
      {
        $pull: { cartItems: { _id: req.params.itemId } },
      },
      { new: true }
    );
  
    calcTotalCartPrice(cart);
    cart.save();
  
    res.status(200).json({
      status: 'success',
      numOfCartItems: cart.cartItems.length,
      data: cart,
    });
  });