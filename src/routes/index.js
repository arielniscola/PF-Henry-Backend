const { Router } = require("express");
const complejos = require("./routesComplejo/complejos.js")
const users = require("./routesUsers/users.js")
const turns = require("./routesTurnos/turns.js")

const router = Router();


router.use("/complejos",complejos);
router.use("/users", users );
router.use("/turns", turns );


module.exports = router;