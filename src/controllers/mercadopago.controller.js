const mercadopagoService = require("../services/mercadopago.services.js");

//Crear vendedores registrados con la app ... para poder cobrar comision 
const createMercadopagoToken = async (req, res) => {
  try {
     const{code, id} = req.body
    const response = await mercadopagoService.createMercadopagoToken(req.body);
    res.status(201).json({ msg: response});
  } catch (error) {
    res.status(400).json(error);
  }
};

//Pagas ...Comprador a vendedor cobrando comision 
const payment = async (req, res) => {
  try {
    const{ courtPref } = req.body
    const data = await mercadopagoService.payment(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

//Comfirmar pagos... buscandolos en la base de datos de Mercadopagos
const confirmPayment = async (req, res) => {
  try {
    const data = await mercadopagoService.confirmPayment(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createMercadopagoToken,
  payment,
  confirmPayment
};