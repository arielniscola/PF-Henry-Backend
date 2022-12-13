const { Router } = require('express');
// Importar todos los routers;
const client = require("../routes/Client.js");
const complejo = require("../routes/Complejo.js");
const court = require("../routes/Court.js");
const turn = require("../routes/Turn.js");
const typeCourt = require("../routes/TypeCourt.js");
const event = require("../routes/Event.js");
const servicescomplejo = require("../routes/ServicesComplejo.js")

const router = Router();

// Configurar los routers
router.use("/clients", client)
router.use("/complejo", complejo)
router.use("/court", court)
router.use("/turn", turn)
router.use("/typecourt", typeCourt)
router.use("/event", event)
router.use("/servicescomplejo", servicescomplejo)




module.exports = router;
