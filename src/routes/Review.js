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

reviewRoutes.post('/create', createReview);
reviewRoutes.put('/update/:id', updateReview);
reviewRoutes.get('/', getAllReviews);
reviewRoutes.get('/complejo-reviews/:id', getReviewsComplejo)
reviewRoutes.get('/:id', getReviewID);
reviewRoutes.delete('/delete/:id', deleteReview);

module.exports = reviewRoutes;