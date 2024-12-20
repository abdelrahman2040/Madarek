const slugify = require('slugify');
const asyncHandler = require('express-async-handler');
const Book = require('../models/bookModel');

// @desc    Get list of books
exports.getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({});
  res.status(200).json({ results: books.length, data: books });
});

// @desc    Get specific book by id
exports.getBook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  if (!book) {
    return res.status(404).json({ msg: `No book for this id ${id}` });
  }
  res.status(200).json({ data: book });
});

// @desc    Create a new book
exports.createBook = asyncHandler(async (req, res) => {
  const { title, description, quantity, price, priceAfterDiscount, imageCover } = req.body;

  if (!title) {
    return res.status(400).json({
      status: 'failed',
      message: 'Book title is required',
    });
  }

  const book = await Book.create({
    title,
<<<<<<< HEAD
=======
    slug: slugify(title, { lower: true }),
>>>>>>> baa586ff24f071387f6a981d6d3bfe41b7571000
    description,
    quantity,
    price,
    priceAfterDiscount,
    imageCover,
  });

  res.status(201).json({ status: 'success', data: book });
});

// @desc    Update specific book
exports.updateBook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, quantity, price, priceAfterDiscount, imageCover } = req.body;

  const book = await Book.findByIdAndUpdate(
    id,
    {
      title,
<<<<<<< HEAD
=======
      slug: slugify(title, { lower: true }),
>>>>>>> baa586ff24f071387f6a981d6d3bfe41b7571000
      description,
      quantity,
      price,
      priceAfterDiscount,
      imageCover,
    },
    { new: true, runValidators: true }
  );

  if (!book) {
    return res.status(404).json({ msg: `No book for this id ${id}` });
  }

  res.status(200).json({ data: book });
});

// @desc    Delete specific book
exports.deleteBook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByIdAndDelete(id);

  if (!book) {
    return res.status(404).json({ msg: `No book for this id ${id}` });
  }

  res.status(204).json({ data: book });
<<<<<<< HEAD
});
=======
});
>>>>>>> baa586ff24f071387f6a981d6d3bfe41b7571000
