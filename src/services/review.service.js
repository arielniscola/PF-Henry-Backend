const { Reviews, Complejo, Client } = require("../db");

const getReviewsComplejo = async (idComplejo) => {
  const reviews = await Reviews.findAll({
    where: { complejoId: idComplejo },
    include: { model: [Complejo, Client] },
  });
  if (!reviews) throw "Not found";

  return reviews;
};

const allReviews = async() => {
    const reviews = await Reviews.findAll();

  if (!reviews) throw "Not found";
  return reviews;
};

const getReviewID = async(id) => {
    const review = await Reviews.findByPk(id);

  if (!review) throw "Not found";
  return review;
};

const deleteReview = async (id) => {
  const result = await Reviews.destroy({
    where: {
      id: id,
    },
  });
  if (!result) throw "Review no deleted";
  return result;
};

const updateReview = async ({ id, comment, rating }) => {
  const result = await Reviews.update(
    { rating: rating, comment: comment },
    { where: { id: id } }
  );
  if (!result) throw "Error update review";
  return result;
};

const createReview = async (review) => {
  const { rating, comment, idClient, idComplejo } = review;
  console.log(review);
  const reviewCreated = await Reviews.create(review);
  // if(!complejo || !client || !reviewCreated) throw "Error creating review"

  // await complejo.setReviews(reviewCreated);
  //  await client.setReviews(reviewCreated);

  return reviewCreated;
};

module.exports = {
  getReviewsComplejo,
  allReviews,
  getReviewID,
  deleteReview,
  updateReview,
  createReview,
};
