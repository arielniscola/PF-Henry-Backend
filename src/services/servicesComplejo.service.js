const { ServicesComplejo } = require("../db");

const getAllServicesComplejo = async () => {
  const data = await ServicesComplejo.findAll();
  if (!data) throw "Data not found";
  return data;
};

const createServicesComplejo = async (data) => {
  const { nameservice } = data;
  if (!nameservice) throw "Required data missing";
  const newServicesComplejo = await ServicesComplejo.create({
    nameservice: data.nameservice,
  });
  if (!newServicesComplejo) throw "Object no create";
  return newServicesComplejo;
};

const getServicesComplejoID = async (id) => {
  if (!id) throw "no ID especified";
  const data = await ServicesComplejo.findByPk(id);
  if (!data) throw "No found";
  return data;
};

const updateServicesComplejo = async (id, data) => {
  try {
    const { nameservice } = data;

    const serviceComplejo = await ServicesComplejo.findByPk(id);
    serviceComplejo.nameservice = nameservice;

    await court.save();
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteServicesComplejo = async (id) => {
  await ServicesComplejo.destroy({
    where: {
      id,
    },
  });
};

module.exports = {
  createServicesComplejo,
  getAllServicesComplejo,
  getServicesComplejoID,
  updateServicesComplejo,
  deleteServicesComplejo,
};
