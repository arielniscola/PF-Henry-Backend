require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASS, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/courtreservations`, {
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

const { Client, Complejo, Config, Court, Event, Turno, TypeCourt, ServicesComplejo, Reviews, Favorites } = sequelize.models;

// Complejo.belongsToMany(Event, {through: 'Complejo_Event',  timestamps: false });
Complejo.hasMany(Event,{
  foreignKey: 'complejoId',
  sourceKey: 'id'
});
// Event.belongsToMany(Complejo, {through: 'Complejo_Event',  timestamps: false });
Event.belongsTo(Complejo,{
  foreignKey: 'complejoId',
  targetId: 'id'
});
// Complejo.belongsToMany(Config, {through: 'Complejo_Config',  timestamps: false });
Complejo.hasMany(Config,{
  foreignKey: 'complejoId',
  sourceKey: 'id'
});
// Config.belongsToMany(Complejo, {through: 'Complejo_Config',  timestamps: false });
Config.belongsTo(Complejo,{
  foreignKey: 'complejoId',
  targetId: 'id'
});
// Complejo.belongsToMany(Court, {through: 'Complejo_Court',  timestamps: false });
Complejo.hasMany(Court,{
  foreignKey: 'complejoId',
  sourceKey: 'id'
});
// Court.belongsToMany(Complejo, {through: 'Complejo_Court',  timestamps: false });
Court.belongsTo(Complejo,{
  foreignKey: 'complejoId',
  targetId: 'id'
});
// Court.belongsToMany(Turno, {through: 'Court_Turno',  timestamps: false });
Court.hasMany(Turno,{
  foreignKey: 'courtId',
  sourceKey: 'id'
});
// Turno.belongsToMany(Court, {through: 'Court_Turno',  timestamps: false });
Turno.belongsTo(Court,{
  foreignKey: 'turnoId',
  targetId: 'id'
});
// Turno.belongsToMany(Client, {through: 'Turno_Client',  timestamps: false });
Client.hasMany(Turno, {
  foreignKey: 'clientId',
  targetId:'id'
});
Turno.belongsTo(Client,{
  foreignKey: 'turnoId',
  targetId: 'id'
});
// Client.belongsToMany(Turno, {through: 'Turno_Client',  timestamps: false });
Client.hasMany(Turno,{
  foreignKey: 'clientId',
  sourceKey: 'id'
});
Client.hasOne(Complejo);

Client.hasMany(Reviews, {
  foreignKey: 'clientId',
  sourceKey: 'id'
});

Reviews.belongsTo(Client, {
  foreignKey: 'reviewsId',
  targetId: 'id'
})

Client.hasOne(Favorites, {
  foreignKey: 'clientId',
  sourceKey: 'id'
});


Complejo.belongsToMany(ServicesComplejo, {through: 'complejoServices', foreignKey:'complejoId'})
ServicesComplejo.belongsToMany(Complejo, { through: 'complejoServices', foreignKey:' servicesComplejoId'})

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

TypeCourt.hasMany(Court, {
  foreignKey: 'typeCourtId',
  sourceKey:'id'
});
Court.belongsTo(TypeCourt, {
  foreignKey: 'courtId',
  targetKey: 'id'
});




module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
