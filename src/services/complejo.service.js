const { Complejo } = require('../db');
const { sendMailBannedComplejo } = require('../libs/notifications');
const cloudinary = require("../utils/cluodinary");

const getAllComplejos = async () => {
    const data = await Complejo.findAll();

    if(!data) throw "Data not found"

    return data
}


const createComplejo = async (data) => {
    const { name, cuit, logo, addres } = data
   
    // const imageUpload = await cloudinary.uploader.upload(logo, {
    //      folder: "henry",
    //      upload_preset: "ml_default"
       
    //  })
    // if(!imageUpload) throw "Error upload image"
    // if(!name) throw "Required data missing"

    const newComplejo = await Complejo.create({
        name,
        cuit,
        addres,
        logo,
        // logo: imageUpload.secure_url
    });

    if(!newComplejo) throw "Object no create"
    return newComplejo
}

const getComplejoID = async (id) => {
    if(!id) throw "no ID especified"
    const data = await Complejo.findByPk(id);

    if(!data) throw "No found"

    return data
}

const updateComplejo = async (id, data) =>{
    try {
        const {name, cuit, logo, addres} = data; 

        const complejo = await Complejo.findByPk(id);
        complejo.name = name;
        complejo.cuit = cuit;
        complejo.logo = logo;
        complejo.addres = addres;

        await complejo.save();
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteComplejo = async(id) =>{
   const complejo = await Complejo.findByPk(id);
   complejo.deleted = true;
   const result = complejo.save();

   return result
} 
module.exports = {
    createComplejo,
    getAllComplejos,
    getComplejoID,
    updateComplejo,
    deleteComplejo
}