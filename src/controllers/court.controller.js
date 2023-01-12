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
    res.status(400).json({ message: error.message });
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
    const { id } = req.params;
    courtService.updateCourt(id, req.body);
    res.send("Court updated successfully");
  } catch (error) {
    res.status(400).json(data);
  }
};

const deleteCourt = async (req, res) => {
  try {
    await courtService.deleteCourt(req.params.id);
    res.send("Court deleted successfully");
  } catch (error) {
    res.status(400).json(error);
  }
};
const getCourtComplex = async (req, res) => {
  try {
    const courts = courtService.getCourtComplex(req.params.id);
    res.status(200).json(courts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  getAllCourt,
  createCourt,
  getCourtID,
  updateCourt,
  deleteCourt,
  getCourtComplex,
};
