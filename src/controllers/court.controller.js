const courtService = require("../services/court.service");

const getAllCourt = async (req, res) => {
  try {
    const data = await courtService.getAllCourt();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
};

const createCourt = async (req, res) => {
  try {
    const data = await courtService.createCourt(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getCourtID = async (req, res) => {
  try {
    const data = await courtService.getCourtID(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateCourt = async (req, res) => {
  try {
<<<<<<< HEAD
    const data = await courtService.updateCourt(req.body, req.params.id);
    res.status(201).json(data);
=======
    const {id} = req.params;
    courtService.updateCourt(id, req.body);
    res.send('Court updated successfully');
>>>>>>> a8ea5b51ee706e7df390389843d99ee5d544b67b
  } catch (error) {
    res.status(400).json(data);
  }
};

const deleteCourt = async (req, res) => {
  try {
<<<<<<< HEAD
    const data = await courtService.deleteCourt(req.params.id);
    res.status(200).json(data);
=======
    await courtService.deleteCourt(req.params.id);
    res.send('Court deleted successfully');
>>>>>>> a8ea5b51ee706e7df390389843d99ee5d544b67b
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllCourt,
  createCourt,
  getCourtID,
  updateCourt,
  deleteCourt,
};
