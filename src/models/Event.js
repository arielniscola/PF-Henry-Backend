const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('event', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    event_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    tittle:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    img:{
        type: DataTypes.STRING,
    },
    description:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    });
};