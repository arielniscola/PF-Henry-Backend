const typeCourtService = require("../services/typeCourt.service");


const getAllTypeCourt = async(req, res) =>{
    try {
        const typeCourts = await typeCourtService.getAllTypeCourt();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json(error);
    }
}

const createTypeCourt = async(req, res) => {
    try {
        const result = await typeCourtService.createTypeCourt(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(404).json(error)
    }
}

const getTypeCourtID = async (req, res) => {
    try {
        const typeCourt = await typeCourtService.getTypeCourtID(req.params.id);
        res.status(200).json(typeCourt)
    } catch (error) {
        res.status(404).json(error)
    }
}
const deleteTypeCourt = async (req, res) => {
    try {
        const result = await typeCourtService.deleteTypeCourt(req.params.id);
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = {
    getAllTypeCourt,
    createTypeCourt,
    getTypeCourtID,
    deleteTypeCourt
}