const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, 'Too short book title'],
      maxlength: [100, 'Too long book title'],
    },
    description: {
      type: String,
      required: [true, 'Book description is required'],
      minlength: [20, 'Too short book description'],
    },
    quantity: {
      type: Number,
      required: [true, 'Book quantity is required'],
    },
    sold: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'Book price is required'],
      trim: true,
      max: [200000, 'Too long book price'],
    },
    priceAfterDiscount: {
      type: Number,
    },

    imageCover: {
      type: String,      
      required: [true, 'Book Image cover is required'],
    },

  },
  {
    timestamps: true,
    // to enable virtual populate
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);



module.exports = mongoose.model('Book', bookSchema);