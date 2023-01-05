const { Router } = require("express");
const {
    getAllTurns,
    deletedTurn,
    createTurn,
    getTurnID,
    updateTurn,
    getTurnsCourtDate,
    getTurnsComplejo
} = require("../controllers/turn.controller");

const turnRoutes = Router();
turnRoutes.get('/all', getAllTurns);
turnRoutes.get('/:id', getTurnID);
turnRoutes.post('/create',createTurn);
turnRoutes.put('/update/:id', updateTurn);
turnRoutes.delete('/delete/:id', deletedTurn);
turnRoutes.get('/complejo-turns/:id', getTurnsComplejo);
turnRoutes.get('/complejo-turno-date/:date/:id', getTurnsCourtDate);

module.exports = turnRoutes;