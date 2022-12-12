const { Court } = require("../db");

const getAllCourt = async () => {
  const data = await Court.findAll();
  if (!data) throw "Data not found";
  return data;
};

const createCourt = async (data) => {
  const { numberCourt, description, typeCourt } = data;
<<<<<<< HEAD
  if (!numberCourt && !description && !typeCourt) throw "Required data missing";
  const newCourt = await Court.create(data);
=======
  if (!numberCourt) throw "Required data missing";
  const newCourt = await Court.create({
    numberCourt: data.numberCourt,
    description: data.description,
    typeCourt: data.typeCourt
  });
>>>>>>> a8ea5b51ee706e7df390389843d99ee5d544b67b
  if (!newCourt) throw "Object no create";
  return newCourt;
};

const getCourtID = async (id) => {
  if (!id) throw "no ID especified";
  const data = await Court.findByPk(id);
  if (!data) throw "No found";
  return data;
};

<<<<<<< HEAD
const updateCourt = async (obj, id) => {
  const { numberCourt, description, typeCourt } = obj;
  if (!id) throw "no ID especified";
  if (numberCourt && description && typeCourt) throw "Required data missing";
  const court = await Court.findByPk(id);
  court.numberCourt = numberCourt;
  court.description = description;
  court.typeCourt = typeCourt;
  await court.save();
  return court;
};

const deleteCourt = async (id) => {
  if (!id) throw "no ID especified";
  const courtDelete = await Court.destroy({
    where: {
      id,
    },
  });
  return courtDelete;
=======
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
>>>>>>> a8ea5b51ee706e7df390389843d99ee5d544b67b
};

module.exports = {
  createCourt,
  getAllCourt,
  getCourtID,
  updateCourt,
  deleteCourt,
};
