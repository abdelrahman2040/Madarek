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
