const { Router } = require("express");
const {    
    getAllClients,
    createClient,
    getClientID,
    deleteClient,
    updateClient
    } = require("../controllers/client.controller.js");


const clientRoutes = Router();



clientRoutes.get("/all", getAllClients);
clientRoutes.post("/create", createClient);
clientRoutes.put("/update/:id", updateClient);
clientRoutes.delete("/delete/:id", deleteClient);
clientRoutes.get("/:id", getClientID);


module.exports = clientRoutes;