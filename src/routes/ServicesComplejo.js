const { Router } = require("express");
const {
    createServicesComplejo,
    getAllServicesComplejo,
    getServicesComplejoID,
    updateServicesComplejo,
    deleteServicesComplejo,
} = require("../controllers/servicesComplejo.controller.js");


const servicesComplejoRoutes = Router();

servicesComplejoRoutes.get("/all", getAllServicesComplejo);
servicesComplejoRoutes.get("/:id", getServicesComplejoID);
servicesComplejoRoutes.post("/create", createServicesComplejo );
servicesComplejoRoutes.put("/update/:id", updateServicesComplejo);
servicesComplejoRoutes.delete("/delete/:id", deleteServicesComplejo);

module.exports = servicesComplejoRoutes;