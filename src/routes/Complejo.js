const { Router } = require("express");
const {
    getAllComplejos,
    createComplejo,
    getComplejoID,
    updateComplejo,
    deleteComplejo
} = require("../controllers/complejo.controller.js");

const complejoRoutes = Router();

complejoRoutes.get("/", getAllComplejos);
complejoRoutes.get("/:id", getComplejoID);
complejoRoutes.post("/", createComplejo );
complejoRoutes.put("/update", updateComplejo);
complejoRoutes.delete("/delete", deleteComplejo);

module.exports = complejoRoutes;