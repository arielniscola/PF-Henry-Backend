const { Court } = require("../db");

const getAllCourt = async () => {
  const data = await Court.findAll();
  if (!data) throw "Data not found";
  return data;
};

const createCourt = async (data) => {
  const { numberCourt, description, typeCourt } = data;
  if (!numberCourt && !description && !typeCourt) throw "Required data missing";
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
};

module.exports = {
  createCourt,
  getAllCourt,
  getCourtID,
  updateCourt,
  deleteCourt,
};
