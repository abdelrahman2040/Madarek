<<<<<<< HEAD
const slugify = require('slugify');
const asyncHandler = require('express-async-handler');
const Book = require('../models/bookModel');

// @desc    Get list of books
exports.getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({});
  // إذا لم يكن هناك حاجة للمتغير page، قم بإزالته
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
    slug: slugify(title, { lower: true }),
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
      slug: slugify(title, { lower: true }),
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
});
=======
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError');
const ApiFeatures = require('../utils/apiFeatures');

exports.deleteBook = asyncHandler(async (req, res, next) => {
     const { id } = req.params;
     const book = await Book.findByIdAndDelete(id);

     if (!book) {
       return next(new ApiError(`No document for this id ${id}`, 404));
     }

     // Trigger "remove" event when update document
     book.remove();
     res.status(204).send();
  });

exports.updateBook = asyncHandler(async (req, res, next) => {
     const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
       new: true,
     });

     if (!book) {
       return next(
         new ApiError(`No document for this id ${req.params.id}`, 404)
       );
     }
     // Trigger "save" event when update document
     book.save();
     res.status(200).json({ data: document });
  });

exports.createBook = asyncHandler(async (req, res) => {
     const book = await Book.create(req.body);
     res.status(201).json({ data: book });
   });

exports.getBook = (Model, populationOpt) =>
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    // 1) Build query
    let book = Book.findById(id);

    if (!book) {
        return next(
          new ApiError(`No document for this id ${req.params.id}`, 404)
        );
      }

    
    res.status(200).json({ data: book });
  });

exports.getBooks = (Model, modelName = '') =>
  asyncHandler(async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  });
>>>>>>> b7138d88b9392c9e12a500889fc957fa8555f810
