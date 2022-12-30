const bcrypt = require("bcrypt");
const { generateId } = require("../utils/generateId");
const { generateJWT } = require("../utils/generateJWT");
const { Client, Favorites } = require('../db');
const { sendMailValidation, sendMailPasswordRestore } = require("../libs/notifications");

//Trae los clientes de la db
const getAllClients = async () => {
    const data = await Client.findAll({include:{model: Favorites}});
    if(!data) throw "No data"
    return data
} 

//Crea un cliente
const createClient = async (data) => {
  const { email, password, name, repeatPassword, direction, dni, country, profile_img } = data;
  if(!name) throw "Required data missing"
  if (password !== repeatPassword) throw "Passwords don't match";
  if (!password && !email && !name) throw "Required data";
  const emailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!emailRegex.test(email)) throw "Email isn't valid";
  const clientFromDb = await Client.findOne({ where: { email } });
  if (clientFromDb) throw "Client is already registered";
  let imageUpload = null;
  if(profile_img){
       imageUpload = await cloudinary.uploader.upload(profile_img, {
          folder: "henry",
          upload_preset: "ml_default"
       
      })
     if(!imageUpload) throw "Error upload image"
     
  }

  try {
    const token = generateId();

    await Client.create({
      email,
      password,
      name,
      token,
      direction,
      dni,
      country,
      profile_img: imageUpload.secure_url || null
    });

    //TODO:
    // ACA SE LE MANDA EL EMAIL DE REGISTRO CON EMAIL, NOMBRE Y TOKEN
    const notificationSend = sendMailValidation(name, email, token)
    if(!notificationSend) throw "Notification not send"

    return "User created successfully, check your email to confirm your account";
  } catch (error) {
    throw error;
  }
};

//trae cliente por id
const getClientID = async (id) => {
    if(!id) throw "Id not found"
    const data = await Client.findByPk(id,{
        include: [
            {model: Favorites,},
        ],
    });
    console.log(data);
    if(!data) throw "Client not found"
    return data
}

//Actualiza el cliente
const updateClient = async (id, data) => {
  try {
    const { name, celNumber, direction, dni, country } = data;

    const cliente = await Client.findByPk(id);
    cliente.name = name;
    cliente.celNumber = celNumber;
    cliente.direction = direction;
    cliente.dni = dni;
    cliente.country = country;

    await cliente.save();
  } catch (error) {
    throw error
  }
};

//Elimina el cliente
const deleteClient = async (id) => {
  await Client.destroy({
    where: {
      id,
    },
  });
  return Client;
};

const authenticateClient = async (data) => {
  const { email, password } = data;

  const clientOnDb = await Client.findOne({
    where: { email },
    raw: true,
  });

  if (!clientOnDb) throw "User doesn't exist";

  if (!clientOnDb.isActive) throw "Your account is not confirmed";

  const passwordMatch = await bcrypt.compare(password, clientOnDb.password);

  if (passwordMatch) {
    return { ...clientOnDb, token: generateJWT(clientOnDb.id) };
  } else {
    throw "Password doesn't match";
  }
};

const confirmAccount = async (token) => {
  const dbClientToConfirm = await Client.findOne({ where: { token } });
  if (!dbClientToConfirm) {
    throw "Token is not valid or have been used already";
  }
  try {
    dbClientToConfirm.isActive = true;
    dbClientToConfirm.token = "";
    await dbClientToConfirm.save();
    return "User successfully confirmed";
  } catch (error) {
    throw error;
  }
};

const forgotPassword = async (email) => {
  const client = await Client.findOne({ where: { email } });
  if (!client) {
    throw "User doesn't exist";
  }

  try {
    client.token = generateId();
    await client.save();

    //TODO:
    // ACA LE MANDAS UN EMAIL DE QUE SE OLVIDO PASSWORD. CON EMAIL, NAME Y TOKEN,
    const notificationSend = sendMailPasswordRestore(client.name, email, token);
    if(!notificationSend) throw "Error send mail"
    return "We sent you an email with instructions";
  } catch (error) {
    throw error;
  }
};

const checkToken = async (token) => {
  const dbClientFromToken = await Client.findOne({ where: { token } });
  if (dbClientFromToken) {
    return "Token valid and user exist";
  } else {
    throw "Token is not valid";
  }
};

const newPassword = async (token, password) => {
  const dbClientFromToken = await Client.findOne({ where: { token } });

  if (dbClientFromToken) {
    dbClientFromToken.pasword = password;
    dbClientFromToken.token = "";

    try {
      await dbClientFromToken.save();
      return "Password successfully modified";
    } catch (error) {
      throw error;
    }
  } else {
    throw "Token is not valid";
  }
};


module.exports = {
  getAllClients,
  createClient,
  getClientID,
  updateClient,
  deleteClient,
  authenticateClient,
  confirmAccount,
  forgotPassword,
  checkToken,
  newPassword,
};