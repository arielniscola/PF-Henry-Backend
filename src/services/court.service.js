const { Court } = require('../db');

//Trae todo de la db
const getAllCourts = async () => {
    const data = await Court.findAll();
    if(!data) throw "No data"
    return data
} 

//Crea un court
const createCourt = async (data) => {
    const { numberCourt, description, typeCourt } = data
    if(!numberCourt && !description && !typeCourt) throw "Required data"
    const newCourt = await Court.create(data);
    if(!newCourt) throw "Court not created"
    return newCourt
}

//trae court por id
const getCourtID = async (id) => {
    if(!id) throw "Id not found"
    const data = await Court.findByPk(id);
    if(!data) throw "Event not found"
    return data
}

module.exports = {
    getAllCourts,
    createCourt,
    getCourtID
}