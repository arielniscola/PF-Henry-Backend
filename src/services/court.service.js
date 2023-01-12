const { Court, TypeCourt, Complejo } = require("../db");

const getAllCourt = async () => {
  const data = await Court.findAll({
    include: { model: [TypeCourt] },
  });
  if (!data) throw "Data not found";
  return data;
};

const createCourt = async (data) => {
  const { numberCourt, complejoId } = data;
  const complex = await Complejo.findByPk(complejoId);
  if (!complex) throw "Complex not found";
  if (!numberCourt) throw "Required data missing";
  const newCourt = await Court.create(data);
  if (!newCourt) throw "Object no create";
  return newCourt;
};

const getCourtID = async (id) => {
  if (!id) throw "no ID especified";
  const data = await Court.findByPk(id, {
    include: [TypeCourt, Complejo],
  });
  if (!data) throw "No found";
  return data;
};

const updateCourt = async (id, data) => {
  try {
    const { numberCourt, description, typeCourt, price, duration_turn } = data;
    console.log(data);
    const court = await Court.findByPk(id);
    court.numberCourt = numberCourt;
    court.description = description;
    court.typeCourt = typeCourt;
    court.price = price;
    court.duration_turn = duration_turn;

    await court.save();
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteCourt = async (id) => {
  await Court.destroy({
    where: {
      id,
    },
  });
};

const getCourtComplex = async (idComplejo) => {
  const courts = Court.findAll({
    where: {
      idComplejo: idComplejo,
    },
    include: { model: [TypeCourt] },
  });
  return courts;
};

module.exports = {
  createCourt,
  getAllCourt,
  getCourtID,
  updateCourt,
  deleteCourt,
  getCourtComplex,
};
