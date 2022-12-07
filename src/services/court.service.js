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

const updateCourt = async (obj) => {};

const deleteCourt = async (id) => {};

module.exports = {
  createCourt,
  getAllCourt,
  getCourtID,
  updateCourt,
  deleteCourt,
};
