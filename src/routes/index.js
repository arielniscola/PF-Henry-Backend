const { Router } = require('express');
const router = Router();
// Importar todos los routers;

const client = require("../routes/Client");
const complejo = require("../routes/Complejo");
const court = require("../routes/Court");
const turn = require("../routes/Turn");
const typeCourt = require("../routes/TypeCourt");
const event = require("../routes/Event");
const notification = require("./Notifications");
const config = require("../routes/Config");
const favorites = require("../routes/Favorites");
//const event = require("../routes/Event.js");
const servicescomplejo = require("../routes/ServicesComplejo.js")
const  review = require("./Review");


// Configurar los routers
router.use("/clients", client)
router.use("/complejo", complejo)
router.use("/court", court)
router.use("/turn", turn)
router.use("/typecourt", typeCourt)
router.use("/event", event)
router.use("/notification", notification);
router.use("/servicescomplejo", servicescomplejo)
router.use("/config", config)
router.use("/favorites", favorites)
router.use("/reviews", review);



module.exports = router;
