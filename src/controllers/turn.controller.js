const turnService = require("../db");

const createTurn = async(req, res) => {
    try {
        const {idClient, idCourt} = req.params;
       
        const turn = await turnService.createTurn(idClient, idCourt, req.body);
        
        res.status(201).json(turn);
    } catch (error) {
        res.status(404).json(error)
    }
}

const deletedTurn = async(req, res) => {
    try {
        const result = await turnService.deletedTurn(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error);
    }
}

const getTurnsComplejo = async(req, res) => {
    try {
        const turns = await turnService.getTurnsComplejo(req.params.idComplejo);
        res.status(200).json(turns);
    } catch (error) {
        res.status(404).json(error);
    }
}

const getTurnID = async(req, res) => {
    try {
        const turn = await turnService.getTurnID(req.params.id);
        res.status(200).json(turn);
    } catch (error) {
        res.status(404).json(error) 
    }
}


module.exports = {
    createTurn,
    deletedTurn,
    getTurnsComplejo,
    getTurnID
}