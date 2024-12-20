const express = require('express');

const {
  getReview,
  getReviews,
  createReview,
  updateReview,
  deleteReview,
  setProductIdAndUserIdToBody,
} = require('../services/reviewService');

const authService = require('../services/authService');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get( getReviews)
  .post(
    authService.protect,
    authService.allowedTo('user'),
    setProductIdAndUserIdToBody,
    createReview
  );
router
  .route('/:id')
  .get( getReview)
  .put(
    authService.protect,
    authService.allowedTo('user'),
    updateReview
  )
  .delete(
    authService.protect,
    authService.allowedTo('user', 'admin'),
    deleteReview
  );

module.exports = router;
