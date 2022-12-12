const { Router } = require("express");
const { 
    getAllTypeCourt,
    getTypeCourtID,
    createTypeCourt,
    deleteTypeCourt,
    updateTypeCourt
} = require("../controllers/typeCourt.controller");

const typeCourtRoutes = Router();

typeCourtRoutes.get('/all', getAllTypeCourt);
typeCourtRoutes.get('/:id', getTypeCourtID);
typeCourtRoutes.post('/create', createTypeCourt);
typeCourtRoutes.delete('/delete/:id', deleteTypeCourt);
typeCourtRoutes.put('/update/:id', updateTypeCourt);

module.exports = typeCourtRoutes;