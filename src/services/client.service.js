const { Client } = require('../db');

//Trae los clientes de la db
const getAllClients = async () => {
    const data = await Client.findAll();
    if(!data) throw "No data"
    return data
} 

//Crea un cliente
const createClient = async (data) => {
    const { name, celNumber, direction, dni, country } = data
    if(!name && !celNumber && !direction && !dni && !country) throw "Required data"
    const newClient = await Client.create(data);
    if(!newClient) throw "Client not created"
    return newClient
}

//trae cliente por id
const getClientID = async (id) => {
    if(!id) throw "Id not found"
    const data = await Client.findByPk(id);
    if(!data) throw "Client not found"
    return data
}

module.exports = {
    getAllClients,
    createClient,
    getClientID
}