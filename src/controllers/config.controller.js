const configService = require('../services/config.service');

//Trae las config
const getAllConfigs = async (req, res) => {
    try {
        const data = await configService.getAllConfigs();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

//Crea el config
const createConfig = async (req, res) => {
    try {
        const data = await configService.createConfig(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}

//Trae config por id
const getConfigID = async (req, res) => {
    try {
        const data = await configService.getConfigID(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error)
    }
}

//Elimina el config
const deleteConfig = async (req, res) => {
    try {
        const {id} = req.params;
        await configService.deleteConfig(id);
        res.send('Config Deleted successfully');
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//Actualizar el config
const updateConfig = async (req, res) => {
    try {
        const {id} = req.params;
        await configService.updateConfig(id, req.body);
        res.send('Config updated successfully');
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllConfigs,
    createConfig,
    getConfigID,
    deleteConfig,
    updateConfig
}
