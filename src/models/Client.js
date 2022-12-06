const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('client', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    celNumber:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    direction: {
        type: DataTypes.STRING
    },
    dni:{
        type: DataTypes.STRING
    },
    country:{
        type: DataTypes.STRING
    }

    }
    );
}