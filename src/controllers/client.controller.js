const clientService = require('../services/client.service.js');

//Trae los clientes
const getAllClients = async (req, res) => {
    try {
        const data = await clientService.getAllClients();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

//Crea el cliente
const createClient = async (req, res) => {
    try {
        const data = await clientService.createClient(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}

//Trae cliente por id
const getClientID = async (req, res) => {
    try {
        const data = await clientService.getClientID(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error)
    }
}

//Elimina el cliente
const deleteClient = async (req, res) => {
    try {
        const {id} = req.params;
        await clientService.deleteClient(id);
        res.send('Client Deleted successfully');
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//Actualizar el cliente
const updateClient = async (req, res) => {
    try {
        const {id} = req.params;
        await clientService.updateClient(id, req.body);
        res.send('Client updated successfully');
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllClients,
    createClient,
    getClientID,
    deleteClient,
    updateClient
}
