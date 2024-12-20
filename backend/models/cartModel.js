
const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema(
  {
    cartItems: [
      {
        book: {
          type: mongoose.Schema.ObjectId,
          ref: 'Book',
        },
        quantity: {
          type: Number,
          default: 1,
        },
        color: String,
        price: Number,
      },
    ],
    totalCartPrice: Number,
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema);