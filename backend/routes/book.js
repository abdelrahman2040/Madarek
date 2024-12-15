const express = require('express');
const Book = require('../models/book.model');
const isAdmin = require('../middleware/Admin');
const asyncHandler = require('express-async-handler'); 
const BookValidation = require('../validation/books.validate');
const router = express.Router();

// Create a new book
router.get('/allbooks' , Admin , asyncHandler(async(req , res) => {
    const books = await Book.find({});
    res.json(books);
}));
//add new book (use book.model) and use admin middleware to let admin add new book
router.post('/addbook/:id', Admin ,asyncHandler(async(req , res) => {
    const {error} = BookValidation.validate(req.body);
        if(error) return res.status(400).json({massege: error.details[0].message});
    const book = new Book({
        title: req.body.title,
        slug: req.body.slug,
        description: req.body.description,
        quantity: req.body.quantity,
        sold: req.body.sold,
        price: req.body.price,
        priceAfterDiscount: req.body.priceAfterDiscount,
        imageCover: req.body.imageCover
    });
    const newbook =await book.save();
    res.status(201).send(newbook);
    res.status(500).send('internal server error');
}));
