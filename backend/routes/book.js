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
//add new book route
router.post('/addbook',asyncHandler(async(req , res) => {
    const {error} = BookValidation.validate(req.body);
        if(error) return res.status(400).json(error.details[0].message);
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
    res.status(201).send('Book Added');
    res.status(500).send('internal server error');
}));
//Update book route
router.put('/updatebook/:id',asyncHandler(async(req ,res)=>{
    const {error} = BookValidation.validate(req.body);
    if(error) return res.status(400).json(error.details[0].message);
    //check if the book exist
    const foundbook = await Book.findById(req.params.id);
    if(!foundbook) return res.status(404).send('The book with the given ID was not found');
    const bookupdated = await Book.findByIdAndUpdate(req.params.id , req.body ,{new : true});
    await bookupdated.save();
    res.status(200).send('Book Updated');
    res.status(500).send('internal server error'); 
}))
//delete book route
router.delete('/deletebook/:id',asyncHandler(async(req , res)=>{
    const{error} = BookValidation.validate(req.body);
    if(error) return res.status(400).json(error.details[0].message);
    const foundbook = await Book.findById(req.params.id);
    if(!foundbook) return res.status(404).send('The book with the given ID was not found');
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).send('Book Deleted');
    res.status(500).send('internal server error');
}));
//get book by id route
router.get('/getbook/:id',asyncHandler(async(req , res)=>{
    const foundbook = await Book.findById(req.params.id);
    if(!foundbook) return res.status(404).send('The book with the given ID was not found');
    res.status(200).send(foundbook);
    res.status(500).send('internal server error');
}));