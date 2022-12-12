const { Router } = require("express");
const {    
    getAllEvents,
    createEvent,
    getEventID,
    deleteEvent,
    updateEvent
    } = require("../controllers/event.controller");


const eventRoutes = Router();



eventRoutes.get("/all", getAllEvents);
eventRoutes.post("/create", createEvent);
eventRoutes.put("/update/:id", updateEvent);
eventRoutes.delete("/delete/:id", deleteEvent);
eventRoutes.get("/:id", getEventID);


module.exports = eventRoutes;