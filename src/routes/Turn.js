const { Router } = require("express");
const {
    getAllTurns,
    deletedTurn,
    createTurn,
    getTurnID,
    updateTurn
} = require("../controllers/turn.controller");

const turnRoutes = Router();
turnRoutes.get('/all', getAllTurns);
turnRoutes.get('/:id', getTurnID);
turnRoutes.post('/create/:idClient/:idCourt',createTurn);
turnRoutes.put('/update/:id', updateTurn);
turnRoutes.delete('/delete/:id', deletedTurn);

module.exports = turnRoutes;