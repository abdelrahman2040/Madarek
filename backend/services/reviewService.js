
const asyncHandler = require('express-async-handler');
const Book = require('../models/reviewModel');

// @desc    Get list of reviews
exports.getReviews = asyncHandler(async (req, res) => {
  const reviews= await Review.find({});
  res.status(200).json({ results: reviews.length, data: reviews });
});

// @desc    Get specific review by id
exports.getReview = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const review = await Review.findById(id);
  if (!review) {
    return res.status(404).json({ msg: `No review for this id ${id}` });
  }
  res.status(200).json({ data: review });
});

// @desc    Create a new review
exports.createReview = asyncHandler(async (req, res) => {

  if (!title) {
    return res.status(400).json({
      status: 'failed',
      message: 'review title is required',
    });
  }

  const review = await Review.create(req.body);

  res.status(201).json({ status: 'success', data: review });
});

// @desc    Update specific review
exports.updateReview = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const review = await Review.findByIdAndUpdate(
    id,
    req.body
  );

  if (!review) {
    return res.status(404).json({ msg: `No review for this id ${id}` });
  }

  res.status(200).json({ data: review });
});

// @desc    Delete specific review
exports.deleteReview = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const review = await Review.findByIdAndDelete(id);

  if (!book) {
    return res.status(404).json({ msg: `No review for this id ${id}` });
  }

  res.status(204).json({ data: review });
});
// Nested route (Create)
exports.setProductIdAndUserIdToBody = (req, res, next) => {
  if (!req.body.product) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user._id;
  next();
};