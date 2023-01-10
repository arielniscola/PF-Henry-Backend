
const { Client, Mercadopago } = require('../db');
const axios =require("axios");
const dotenv  = require('dotenv');
const mercadopago = require('mercadopago');
dotenv.config();
const {
  MERCADOPAGO_APP_CLIENT_SECRET,
  MERCADOPAGO_APP_ID,
  ACCESS_TOKEN
} = process.env


//Crea un cliente
const createMercadopagoToken = async (data) => {
  const { code, id } = data;
  if(!code && !id) throw "Required data missing"
  const formData = new URLSearchParams();
  formData.append('client_secret', MERCADOPAGO_APP_CLIENT_SECRET);
  formData.append('client_id', MERCADOPAGO_APP_ID);
  formData.append('grant_type', 'authorization_code');
  formData.append('code', code);
  formData.append('redirect_uri','https://deploy-pf-arielniscola.vercel.app/mercadopago-auth/');
  const urlMercadopagoToken = "https://api.mercadopago.com/oauth/token"
  try {
    const getToken = await axios.post(urlMercadopagoToken, formData , {
      headers:{
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
       'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
   const clientFromDb = await Client.findOne({ where: { id} });
   const vendedorMercadopagp = await Mercadopago.create({
    "access_token": getToken.data.access_token,
    "token_type": getToken.data.token_type,
    "expires_in": getToken.data.expires_in,
    "refresh_token": getToken.data.refresh_token,
    "public_key": getToken.data.public_key,
    });
    clientFromDb.setMercadopago(vendedorMercadopagp)
    return "Integration created successfully, You can now receive money in your account Mercadopago";
  } catch (error) {
    throw error;
  }
};
// falto probrar los pagos y listo... que todo funcione 
const payment = async (data) => {
  const { courtPref } = data
  const clientFromDb = await Client.findOne({ where: { id: courtPref.userId} }); // necesitas el id del usuario... 
  mercadopago.configure({access_token: clientFromDb.mercadopago.access_token})// para buscar el token... 
    let preference = {
      items: [
      {
          id: courtPref.id,
          title: courtPref.name,
          currency_id: "ARS",
          picture_url: courtPref.image,
          description: courtPref.event,
          category_id: 'art',
          quantity: 1,
          unit_price: courtPref.price,
      }],
      marketplace_fee: courtPref.comision,
      back_urls: {
      failure: "/failure",
      pending: "/pending",
      success: `${CLIENT_HOST}/contact-us`
      },
      auto_return: 'approved',
      binary_mode: true,
  }
   const response = await mercadopago.preferences.create(preference)
   return response 
}
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
