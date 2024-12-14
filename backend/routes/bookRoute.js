const express = require('express');

const {
    deleteBook,
    updateBook,
    createBook,
    getBook,
    getBooks,
} = require('../services/bookService');
const authService = require('../services/authService');

const router = express.Router();

router.use(authService.protect, authService.allowedTo('user'));
router
  .route('/')
  .get(getBooks)
  .post(
    authService.protect,
    authService.allowedTo('admin', 'manager'),
    createBook
  );

router
  .route('/:itemId')
  .get(getBook)
  .put(
    authService.protect,
    authService.allowedTo('admin', 'manager'),
    updateBook
  )
  .delete(
    authService.protect,
    authService.allowedTo('admin'),
    deleteBook
);

module.exports = router;