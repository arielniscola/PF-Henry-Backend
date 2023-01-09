const { Config } = require('../db');

//Trae las config de la db
const getAllConfigs = async () => {
    const data = await Config.findAll();
    if(!data) throw "No data"
    return data
} 

//Crea un config
const createConfig = async (data) => {
    const newConfig = await Config.create(data);
    if(!newConfig) throw "Config not created"
    return newConfig
}

//trae config por id
const getConfigID = async (id) => {
    if(!id) throw "Id not found"
    const data = await Config.findByPk(id);
    if(!data) throw "Config not found"
    return data
}

//Actualiza el config
const updateConfig = async (id, data) =>{
    try {
        const {open_days} = data; 

        const config = await Config.findByPk(id);
        config.open_days = open_days;


        await config.save();
    } catch (error) {
        res.status(400).json(error)
    }
}

//Elimina la config
const deleteConfig = async(id) =>{
    await Config.destroy({
        where:{
            id,
        },
    });
    return Config;
} 

module.exports = {
    getAllConfigs,
    createConfig,
    getConfigID,
    updateConfig,
    deleteConfig
}