const clientService = require("../services/client.service.js");

//Trae los clientes
const getAllClients = async (req, res) => {
  try {
    const data = await clientService.getAllClients();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Crea el cliente
const createClient = async (req, res) => {
  try {
    const response = await clientService.createClient(req.body);
    res.status(201).json({ msg: response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Trae cliente por id
const getClientID = async (req, res) => {
  try {
    const data = await clientService.getClientID(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Elimina el cliente
const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    await clientService.deleteClient(id);
    res.send("Client Deleted successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Actualizar el cliente
const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    await clientService.updateClient(id, req.body);
    res.send("Client updated successfully");
  } catch (error) {
    res.status(400).json(error);
  }
};

const authenticateClient = async (req, res) => {
  try {
    const client = await clientService.authenticateClient(req.body);
    res.status(200).json(client);
  } catch (error) {
    res.status(400).send(error);
  }
};

const confirmClientAccount = async (req, res) => {
  const { token } = req.params;
  try {
    const response = await clientService.confirmAccount(token);
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const checkClientToken = async (req, res) => {
  const { token } = req.params;

  try {
    const response = await clientService.checkToken(token);
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const newClientPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const response = await clientService.newPassword(token, password);
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const forgotClientPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const response = await clientService.forgotPassword(email);
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const clientProfile = (req, res) => {
  try {
    const { user } = req;
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const googleLogin = async (req, res) => {
  const { credential } = req.body;
  try {
    const client = await clientService.googleLogin(credential);
    res.status(200).json(client);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllClients,
  createClient,
  getClientID,
  deleteClient,
  updateClient,
  authenticateClient,
  confirmClientAccount,
  checkClientToken,
  newClientPassword,
  forgotClientPassword,
  clientProfile,
  googleLogin,
};
