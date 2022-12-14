require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');
// const TypeCourt = require('./models/TypeCourt');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;


//const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/prueba9`, {
  //logging: false, // set to console.log to see the raw SQL queries
  //native: false, // lets Sequelize know we can use pg-native for ~30% more speed})
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/courtreservations`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Client, Complejo, Config, Court, Event, Turno, TypeCourt, Favorites } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Complejo.hasMany(Event,{
  foreignKey:{
    type: DataTypes.UUID,
    allowNull: false
  }
});
Event.belongsTo(Complejo);

Complejo.hasMany(Config,{
  foreignKey:{
    type: DataTypes.UUID,
    allowNull: false
  }
});
Config.belongsTo(Complejo);

Complejo.hasMany(Court,{
  foreignKey:{
    type: DataTypes.UUID,
    allowNull: false
  }
});
Court.belongsTo(Complejo);

Court.hasMany(Turno,{
  foreignKey:{
    type: DataTypes.UUID,
    allowNull: false
  }
});
Turno.belongsTo(Court);

Client.hasMany(Turno,{
  foreignKey:{
    type: DataTypes.UUID,
    allowNull: false
  }
});
Turno.belongsTo(Client);

TypeCourt.hasMany(Court,{
  foreignKey:{
    type: DataTypes.UUID,
    allowNull: false
  }
});
Court.belongsTo(TypeCourt);

Client.hasMany(Favorites,{
  foreignKey:{
    type: DataTypes.UUID,
    allowNull: false
  }
});
Favorites.belongsTo(Client);


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
