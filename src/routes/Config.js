const { Router } = require("express");
const {    
    getAllConfigs,
    createConfig,
    getConfigID,
    deleteConfig,
    updateConfig
    } = require("../controllers/config.controller");


const configRoutes = Router();



configRoutes.get("/all", getAllConfigs);
configRoutes.post("/create", createConfig);
configRoutes.put("/update/:id", updateConfig);
configRoutes.delete("/delete/:id", deleteConfig);
configRoutes.get("/:id", getConfigID);


module.exports = configRoutes;