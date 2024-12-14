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
