const { Complejo, Client, Config, Reviews, Court } = require("../db");
const { sendMailBannedComplejo } = require("../libs/notifications");
const cloudinary = require("../utils/cluodinary");

const getAllComplejos = async () => {
  const data = await Complejo.findAll({
    where: {
      deleted: false,
      active: true,
    },
    include: [{ model: Court }],
  });

  if (!data) throw "Data not found";

  return data;
};

const createComplejo = async (data) => {
  const { name, cuit, logo, address, lat, lng, city, idUser } = data;

  const client = await Client.findByPk(idUser);
  if (!client) throw "User not exist";
  if (client.idComplejo) throw "User have complex created";

  // const imageUpload = await cloudinary.uploader.upload(logo, {
  //        folder: "henry",
  //     upload_preset: "ml_default"

  //    })
  //  if(!imageUpload) throw "Error upload image"
  if (!name) throw "Required data missing";

  const newComplejo = await Complejo.create({
    name,
    cuit,
    address,
    lat,
    lng,
    city,
    clientId: idUser,
    // logo: imageUpload.secure_url || null
  });

  if (!newComplejo) throw "Complex no created";

  return newComplejo;
};

const getComplejoID = async (id) => {
  if (!id) throw "no ID especified";
  const data = await Complejo.findByPk(id, {
    include: [
      { model: Reviews, include: [Client] },
      { model: Config },
      { model: Court },
    ],
  });

  if (!data) throw "No found";

  return data;
};

const updateComplejo = async (id, data) => {
  try {
    const { name, cuit, logo, address, lat, lng, website, city, active } = data;

    const complejo = await Complejo.findByPk(id);
    complejo.name = name;
    complejo.cuit = cuit;
    complejo.logo = logo;
    complejo.address = address;
    complejo.lat = lat;
    complejo.lng = lng;
    complejo.website = website;
    complejo.city = city;
    complejo.active = active;

    await complejo.save();
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteComplejo = async (id) => {
  const complejo = await Complejo.findByPk(id);
  complejo.deleted = true;
  const result = complejo.save();

  return result;
};

module.exports = {
  createComplejo,
  getAllComplejos,
  getComplejoID,
  updateComplejo,
  deleteComplejo,
};
