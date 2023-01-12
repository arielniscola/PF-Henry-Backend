const reviewService = require("../services/review.service");

const getReviewsComplejo = async (req, res) => {
  try {
    const idComplejo = req.params.id;
    const reviews = await reviewService.getReviewsComplejo(idComplejo);


    res.status(200).json(reviews);
  } catch (error) {
    res.status(404).json(error);
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await reviewService.getAllReviews();

    res.status(200).json(reviews);
  } catch (error) {
    res.status(404).json(error);
  }
};

const getReviewID = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const review = await reviewService.getReviewID(reviewId);
    res.status(200).json(review);
  } catch (error) {
    res.status(404).json(error);
  }
};


const deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const reviewDeleted = await reviewService.deleteReview(reviewId);
    res.status(200).json(reviewDeleted);
  } catch (error) {
    res.status(404).json(error);
  }
};

const createReview = async (req, res) => {
  try {
    const review = req.body;
    const reviewCreated = await reviewService.createReview(review);
    res.status(201).json(reviewCreated);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
};


const updateReview = async(req, res) => {
    try {
        const reviewData = req.body;
        const reviewUpdated = await reviewService.updateReview(reviewData);

        res.status(201).json(reviewUpdated)
    } catch (error) {
        res.status(500).json(error)
    }
};

module.exports = {
  getAllReviews,
  getReviewsComplejo,
  getReviewID,
  deleteReview,
  createReview,
  updateReview,
};
