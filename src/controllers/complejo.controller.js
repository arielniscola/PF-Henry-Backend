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
        const {id} = req.params;
        const {name, cuit, logo, addres} = req.body;

        const complejo = await Complejo.findByPk(id);
        complejo.name = name;
        complejo.cuit = cuit;
        complejo.logo = logo;
        complejo.addres = addres;

        await complejo.save();
        res.json(complejo);
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteComplejo = async (req, res) => {
    try {
        const {id} = req.params.id;
        await Complejo.destroy({
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
    getAllComplejos,
    createComplejo,
    getComplejoID,
    updateComplejo,
    deleteComplejo
}