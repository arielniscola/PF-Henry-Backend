const servicesComplejoServer = require('../services/servicesComplejo.service.js');

const getAllServicesComplejo = async (req, res, next) => {
    try {
        const data = await servicesComplejoServer.getAllServicesComplejo();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

const createServicesComplejo = async (req, res) => {
    try {
        const data = await servicesComplejoServer.createServicesComplejo(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getServicesComplejoID = async (req, res) => {
    try {
        const data = await servicesComplejoServer.getServicesComplejoID(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteServicesComplejo = async (req, res) => {
    try {
        const {id} = req.params;
        await servicesComplejoServer.deleteServicesComplejo(id);
        res.send('Client Deleted successfully');
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const updateServicesComplejo = async (req, res) => {
    try {
        const {id} = req.params;
        await servicesComplejoServer.updateServicesComplejo(id, req.body);
        res.send('Client updated successfully');
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllServicesComplejo,
    createServicesComplejo,
    getServicesComplejoID,
    deleteServicesComplejo,
    updateServicesComplejo
}
