const complejoService = require("../services/complejo.service");
const { Complejo } = require('../db');

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
        res.status(400).json({message: error.message});
    }
}

const getComplejoID = async (req, res) => {
    try {
        const data = await complejoService.getComplejoID(req.params.id);
        
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const updateComplejo = async (req, res) => {
    try {
        const {id} = req.params;
        await complejoService.updateComplejo(id, req.body);
        res.send('Complejo updated successfully');
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteComplejo = async (req, res) => {
    try {
        const {id} = req.params;
        await complejoService.deleteComplejo(id);
        res.send('Complejo Deleted successfully');
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    getAllComplejos,
    createComplejo,
    getComplejoID,
    updateComplejo,
    deleteComplejo
}