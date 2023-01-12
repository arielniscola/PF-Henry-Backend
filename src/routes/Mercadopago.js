const { Router } = require("express");
const { 
    createMercadopagoToken,
    payment
} = require("../controllers/mercadopago.controller.js");


const mercadopagoRoutes = Router();

mercadopagoRoutes.post('/createtoken/', createMercadopagoToken);
mercadopagoRoutes.post('/payment/', payment);


module.exports = mercadopagoRoutes;