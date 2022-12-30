const { Review, Complejo, Client } = require("../db");

const getReviewsComplejo = async(idComplejo) => {
    const reviews = await Review.findAll({
        where: { idComplejo },
        include: { model: [Complejo, Client]}
    })

    if(!reviews) throw "Not found"

    return reviews
}

const allReviews = async() => {
    const reviews = await Review.findAll();

    if(!reviews) throw "Not found"
    return reviews
}

const getReviewID = async(id) => {
    const review = await Review.findByPk(id);

    if(!review) throw "Not found"
    return review
}

const deleteReview = async(id) => {
    const result = await Review.destroy({
        where:{
            id: id
        }
    });
    if(!result) throw "Review no deleted"
    return result;
}

const updateReview = async({id, comment, rating}) => {
    const result = await Review.update(
        { rating: rating, comment: comment },
        { where: { id: id} }
      )
    if(!result) throw "Error update review"
    return result
}

const createReview = async(review) => {
    const { rating, comment, idClient, idComplejo} = review;
    const reviewCreated = Review.create({rating, comment});
    const complejo = await Complejo.findByPk(idComplejo);
    const client = await Client.findByPk(idClient);
    if(!complejo || !client || !reviewCreated) throw "Error creating review"

    await complejo.setReviews(reviewCreated);
    await client.setReviews(reviewCreated);

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