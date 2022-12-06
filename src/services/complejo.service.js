const { Complejo } = require('../db');


const getAllComplejos = async () => {
    const data = await Complejo.findAll();

    if(!data) throw "Data not found"

    return data
}


const createComplejo = async (data) => {
    const { name, cuit, logo, addres } = data
   
    if(!name) throw "Required data missing"

    const newComplejo = await Complejo.create(data);

    if(!newComplejo) throw "Object no create"
    return newComplejo
}

const getComplejoID = async (id) => {
    if(!id) throw "no ID especified"
    const data = await Complejo.findByPk(id);

    if(!data) throw "No found"

    return data
}

const updateComplejo = async (obj) => {

}

const deleteComplejo = async (id) =>{

}

module.exports = {
    createComplejo,
    getAllComplejos,
    getComplejoID,
    updateComplejo,
    deleteComplejo
}