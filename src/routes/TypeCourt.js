const { Router } = require("express");
const { 
    getAllTypeCourt,
    getTypeCourtID,
    createTypeCourt,
    deleteTypeCourt
 } = require("../controllers/typeCourt.controller");

const typeCourtRoutes = Router();

typeCourtRoutes.get('/', getAllTypeCourt);
typeCourtRoutes.get('/:id', getTypeCourtID);
typeCourtRoutes.post('/', createTypeCourt);
typeCourtRoutes.delete('/:id', deleteTypeCourt);

module.exports = turnRoutes;