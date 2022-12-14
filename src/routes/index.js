const { Router } = require('express');
// Importar todos los routers;
const client = require("../routes/Client");
const complejo = require("../routes/Complejo");
const court = require("../routes/Court");
const turn = require("../routes/Turn");
const typeCourt = require("../routes/TypeCourt");
const event = require("../routes/Event");
const notification = require("./Notifications");


const router = Router();

// Configurar los routers
router.use("/clients", client)
router.use("/complejo", complejo)
router.use("/court", court)
router.use("/turn", turn)
router.use("/typecourt", typeCourt)
router.use("/event", event)
router.use("/notification", notification);



module.exports = router;
