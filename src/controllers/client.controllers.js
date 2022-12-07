const clientService = requiere('../services/client.service.js');
const { Client } = require('../db');

//Trae los clientes
const getAllClients = async (req, res) => {
    try {
        const data = await clientService.getAllClients();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json(error);
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
        const {id} = req.params.id;
        await Client.destroy({
            where:{
                id,
            },
        });
        res.status(204)
    } catch (error) {
        res.status(200).json(error)
    }
}

//Actualizar el cliente
const updateClient = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, celNumber, direction, dni, country} = req.body;

        const client = await Client.findByPk(id);
        client.name = name;
        client.celNumber = celNumber;
        client.direction = direction;
        client.dni = dni;
        client.country = country;

        await client.save();
        res.json(client);
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
