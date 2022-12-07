const courtService = require("../services/court.service");
const { Court } = require('../db');

const getAllCourts = async (req, res) => {
    try {
        const data = await courtService.getAllCourts();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json(error);
    }
}

const createCourt = async (req, res) => {
    try {
        const data = await courtService.createCourt(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getCourtID = async (req, res) => {
    try {
        const data = await courtService.getCourtID(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateCourt = async (req, res) => {
    try {
        const {id} = req.params;
        const {numberCourt, description, typeCourt} = req.body;

        const court = await Court.findByPk(id);
        court.numberCourt = numberCourt;
        court.description = description;
        court.typeCourt = typeCourt;

        await court.save();
        res.json(court);
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteCourt = async (req, res) => {
    try {
        const {id} = req.params.id;
        await Court.destroy({
            where:{
                id,
            },
        });
        res.status(204)
    } catch (error) {
        res.status(200).json(error)
    }
}

module.exports = {
    getAllCourts,
    createCourt,
    getCourtID,
    updateCourt,
    deleteCourt
}