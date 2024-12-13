const express = require('express');
const Book = require('../models/book.model');
const isAdmin = require('../middleware/Admin');
const asyncHandler = require('express-async-handler'); 
const router = express.Router();

// Create a new book
router.get('/allbooks' , Admin , asyncHandler(async(req , res) => {
    const books = await Book.find({});
    res.json(books);
}));
//add new book