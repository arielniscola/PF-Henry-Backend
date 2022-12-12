const { Router } = require("express");
const {
    getAllComplejos,
    createComplejo,
    getComplejoID,
    updateComplejo,
    deleteComplejo
} = require("../controllers/complejo.controller.js");


const complejoRoutes = Router();

complejoRoutes.get("/all", getAllComplejos);
complejoRoutes.get("/:id", getComplejoID);
complejoRoutes.post("/create", createComplejo );
complejoRoutes.put("/update/:id", updateComplejo);
complejoRoutes.delete("/delete/:id", deleteComplejo);

module.exports = complejoRoutes;