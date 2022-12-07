const { Event } = require('../db');

//Trae los eventos de la db
const getAllEvents = async () => {
    const data = await Event.findAll();
    if(!data) throw "No data"
    return data
} 

//Crea un evento
const createEvent = async (data) => {
    const { event_date, tittle, img, description } = data
    if(!event_date && !tittle && !img && !description) throw "Required data"
    const newEvent = await Event.create(data);
    if(!newEvent) throw "Event not created"
    return newEvent
}

//trae evento por id
const getEventID = async (id) => {
    if(!id) throw "Id not found"
    const data = await Event.findByPk(id);
    if(!data) throw "Event not found"
    return data
}

module.exports = {
    getAllEvents,
    createEvent,
    getEventID
}