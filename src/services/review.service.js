const { Reviews, Complejo, Client } = require("../db");

const getReviewsComplejo = async(idComplejo) => {
    const reviews = await Reviews.findAll({
        where: { idComplejo },
        include: { model: [Complejo, Client]}
    })

    if(!reviews) throw "Not found"

    return reviews
}

const allReviews = async() => {
    const reviews = await Reviews.findAll();

    if(!reviews) throw "Not found"
    return reviews
}

const getReviewID = async(id) => {
    const review = await Reviews.findByPk(id);

    if(!review) throw "Not found"
    return review
}

const deleteReview = async(id) => {
    const result = await Reviews.destroy({
        where:{
            id: id
        }
    });
    if(!result) throw "Review no deleted"
    return result;
}

const updateReview = async({id, comment, rating}) => {
    const result = await Reviews.update(
        { rating: rating, comment: comment },
        { where: { id: id} }
      )
    if(!result) throw "Error update review"
    return result
}

const createReview = async(review) => {
  console.log("esto es review",review)
  const { rating, comment, clientId, complejoId} = review;
  const reviewCreated = await Reviews.create({rating, comment, clientId, complejoId});
  const complejo = await Complejo.findByPk(complejoId);
  const client = await Client.findByPk(clientId);
  if(!complejo || !client || !reviewCreated) throw "Error creating review"

  return reviewCreated
}

module.exports = {
    getReviewsComplejo,
    allReviews,
    getReviewID,
    deleteReview,
    updateReview,
    createReview
}