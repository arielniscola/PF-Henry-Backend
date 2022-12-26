const { Router } = require("express");
const { 
    createReview,
    updateReview,
    getAllReviews,
    getReviewsComplejo,
    getReviewID,
    deleteReview
} = require("../controllers/review.controller");


const reviewRoutes = Router();

reviewRoutes.post('/', createReview);
reviewRoutes.put('/', updateReview);
reviewRoutes.get('/', getAllReviews);
reviewRoutes.get('/complejo-reviews/:id', getReviewsComplejo)
reviewRoutes.get('/:id', getReviewID);
reviewRoutes.delete('/:id', deleteReview);

module.exports = reviewRoutes;