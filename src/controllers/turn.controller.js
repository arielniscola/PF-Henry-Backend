const { json } = require("body-parser");
const turnService = require("../services/turn.service");

//Trae los turnos
const getAllTurns = async (req, res) => {
  try {
    const data = await turnService.getAllTurns();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//crea el turno
const createTurn = async (req, res) => {
  try {
    await turnService.createTurn(req.body);
    res.send("Turn created successfully");
  } catch (error) {
    res.status(404).json(error);
  }
};

const deletedTurn = async (req, res) => {
  try {
    await turnService.deleteTurn(req.params.id);
    res.send("Turn deleted successfully");
  } catch (error) {
    res.status(404).json(error);
  }
};

const getTurnsComplejo = async (req, res) => {
  try {
    const turns = await turnService.getTurnsComplejo(req.params.idComplejo);
    res.status(200).json(turns);
  } catch (error) {
    res.status(404).json(error);
  }
};

const getTurnID = async (req, res) => {
  try {
    const turn = await turnService.getTurnID(req.params.id);
    res.status(200).json(turn);
  } catch (error) {
    res.status(404).json(error);
  }
};

const updateTurn = async (req, res) => {
  try {
    const { id } = req.params;
    await turnService.updateTurn(id, req.body);
    res.send("Turn updated successfully");
  } catch (error) {
    res.status(400).json(error);
  }
};
const getTurnsCourtDate = async (req, res) => {
  try {
    const turns = await turnService.getTurnsCourtDate(
      req.params.date,
      req.params.id
    );
    res.status(200).json(turns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTurnsUser = async (req, res) => {
  try {
    const turns = await turnService.getTurnsUser(req.params.id);
    res.status(200).json(turns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTurns,
  createTurn,
  deletedTurn,
  getTurnsComplejo,
  getTurnID,
  updateTurn,
  getTurnsCourtDate,
  getTurnsUser,
};
