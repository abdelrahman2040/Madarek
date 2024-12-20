<<<<<<< HEAD
const express = require("express");
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../services/bookService");
const router = express.Router();
const authService = require("../services/authService");

router.route("/")
    .get(getBooks)
    .post(authService.protect,authService.allowedTo('admin'), createBook);
router
    .route("/:id")
    .get(getBook)
    .put(authService.protect,authService.allowedTo('admin'), updateBook)
    .delete(authService.protect,authService.allowedTo('admin'), deleteBook);

module.exports = router;
=======
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
>>>>>>> b7138d88b9392c9e12a500889fc957fa8555f810
