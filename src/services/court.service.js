const { Court } = require("../db");

const getAllCourt = async () => {

  const data = await Court.findAll();
  if (!data) throw "Data not found";
  return data;
};

const createCourt = async (data) => {

  const { numberCourt, description, typeCourt } = data;
  if (!numberCourt) throw "Required data missing";
  const newCourt = await Court.create(data);
  if (!newCourt) throw "Object no create";
  return newCourt;
};

const getCourtID = async (id) => {

  if (!id) throw "no ID especified";
  const data = await Court.findByPk(id);
  if (!data) throw "No found";
  return data;
};

const updateCourt = async (id, data) => {
  try {
    const {numberCourt, description, typeCourt} = data; 

    const court = await Court.findByPk(id);
    court.numberCourt = numberCourt;
    court.description = description;
    court.typeCourt = typeCourt;

    await court.save();
} catch (error) {
    res.status(400).json(error)
}
};

const deleteCourt = async (id) => {
  await Court.destroy({
    where:{
        id,
    },
});
};

module.exports = {
  createCourt,
  getAllCourt,
  getCourtID,
  updateCourt,
  deleteCourt,
};
