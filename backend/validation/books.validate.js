const express = require('express');
const Joi = require('joi');
const Book = require('../models/book.model');

const BookValidation = Joi.object({ 
    title: Joi.string().min(3).max(100).required().messages({  
        'string.base': 'Title must be a string',
        'string.empty': 'Title cannot be empty',
        'string.min': 'Title must be at least 3 characters',
        'string.max': 'Title must be at most 100 characters',
        'any.required': 'Title is required'}),
    slug: Joi.string().required().messages( 'Slug must be a string and required'),
    description: Joi.string().min(20).required().messages({
        'string.base': 'Description must be a string',
        'string.empty': 'Description cannot be empty',
        'string.min': 'Description must be at least 20 characters',
        'any.required': 'Description is required',
    }),
    quantity: Joi.number().required().messages({ 'any.required': 'quantity must be a number and required' }),
    sold: Joi.number().messages({ 'any.number': 'must be a number' }),
    price: Joi.number().required().messages({ 'any.required': 'Price must be a number and required' }),
    priceAfterDiscount: Joi.number().messages({ 'any.number': 'PriceAfterDiscount must be a number' }),
    imageCover: Joi.string().required().messages({ 'any.required': 'ImageCover must be a string and required' })
});

module.exports = BookValidation;