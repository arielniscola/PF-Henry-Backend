const { Router } = require("express");
const {
    deletedTurn,
    getTurnsComplejo,
    createTurn,
    getTurnID
} = require("../controllers/turn.controller");

const turnRoutes = Router();

turnRoutes.get('/:idComplejo', getTurnsComplejo);
turnRoutes.get('/:id', getTurnID);
turnRoutes.post('/:idClient/:idCourt',createTurn);
turnRoutes.delete('/:id', deletedTurn);

module.exports = turnRoutes;