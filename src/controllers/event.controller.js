const eventService = require('../services/evento.service');
const { Event } = require('../db');

//Trae los eventos
const getAllEvents = async (req, res) => {
    try {
        const data = await eventService.getAllEvents();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json(error);
    }
}

//Crea el evento
const createEvent = async (req, res) => {
    try {
        const data = await eventService.createEvent(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}

//Trae evento por id
const getEventID = async (req, res) => {
    try {
        const data = await eventService.getEventID(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error)
    }
}

//Elimina el evento
const deleteEvent = async (req, res) => {
    try {
        const {id} = req.params.id;
        await Event.destroy({
            where:{
                id,
            },
        });
        res.status(204)
    } catch (error) {
        res.status(200).json(error)
    }
}

//Actualizar el evento
const updateEvent = async (req, res) => {
    try {
        const {id} = req.params;
        const {event_date, tittle, img, description} = req.body;

        const event = await Event.findByPk(id);
        event.event_date = event_date;
        event.tittle = tittle;
        event.img = img;
        event.description = description;

        await event.save();
        res.json(event);
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllEvents,
    createEvent,
    getEventID,
    deleteEvent,
    updateEvent
}
