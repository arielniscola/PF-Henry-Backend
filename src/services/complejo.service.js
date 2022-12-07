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

const updateComplejo = async (id, data) =>{
    try {
        const {name, cuit, logo, addres} = data; 

        const complejo = await Complejo.findByPk(id);
        complejo.name = name;
        complejo.cuit = cuit;
        complejo.logo = logo;
        complejo.addres = addres;

        await complejo.save();
        return complejo;
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteComplejo = async(id) =>{
    await Complejo.destroy({
        where:{
            id,
        },
    });
    return Complejo;
} 
module.exports = {
    createComplejo,
    getAllComplejos,
    getComplejoID,
    updateComplejo,
    deleteComplejo
}