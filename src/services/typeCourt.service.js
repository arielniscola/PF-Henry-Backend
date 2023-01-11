const { TypeCourt } = require("../db");
const cloudinary = require("../utils/cluodinary");
const getAllTypeCourt = async () => {
  const data = await TypeCourt.findAll();
  if (!data) throw "Data not found";
  return data;
};

const createTypeCourt = async (data) => {
  const { description, icon } = data;
  if (!description) throw "Data required missing";

  const imageUpload = await cloudinary.uploader.upload(icon, {
    folder: "henry",
    upload_preset: "ml_default",
  });

  const newTypeCourt = await TypeCourt.create({ description, imageUpload });

  if (!newTypeCourt) throw "Type Court no created";

  return newTypeCourt;
};

const getTypeCourtID = async (id) => {
  const typeCourt = await TypeCourt.findByPk(id);

  if (!typeCourt) throw "Not found";
  return typeCourt;
};

const deleteTypeCourt = async (id) => {
  const deleted = await TypeCourt.destroy({
    where: {
      id: id,
    },
  });
  return deleted;
};

const updateTypeCourt = async (id, data) => {
  try {
    const { description, icon } = data;

    const typecourt = await TypeCourt.findByPk(id);
    typecourt.description = description;
    typecourt.icon = icon;

    await typecourt.save();
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllTypeCourt,
  createTypeCourt,
  getTypeCourtID,
  deleteTypeCourt,
  updateTypeCourt,
};
