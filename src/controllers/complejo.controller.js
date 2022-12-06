const complejoService = require("../services/complejo.service");

const getAllComplejos = async (req, res) => {
    try {
        const data = await complejoService.getAllComplejos();

        res.status(200).json(data);
    } catch (error) {
        res.status(404).json(error);
    }
}

const createComplejo = async (req, res) => {
    try {
        const data = await complejoService.createComplejo(req.body);

        res.status(201).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getComplejoID = async (req, res) => {
    try {
        const data = await complejoService.getComplejoID(req.params.id);
        
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateComplejo = async (req, res) => {
    try {
        const data = await complejoService.updateComplejo(req.body);

        res.status(201).json(data);
    } catch (error) {
        res.status(400).json(data);
    }
}

const deleteComplejo = async (req, res) => {
    try {
        const data = await complejoService.deleteComplejo(req.params.id);

        res.status(200).json(data)
    } catch (error) {
        res.status(200).json(error)
    }
}

module.exports = {
    getAllComplejos,
    createComplejo,
    getComplejoID,
    updateComplejo,
    deleteComplejo
}