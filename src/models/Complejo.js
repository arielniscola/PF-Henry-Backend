const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('complejo', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    cuit:{
        type: DataTypes.STRING,
    },
    logo:{
        type: DataTypes.STRING,
    },
    address:{
        type: DataTypes.STRING,
    },
    city:{
        type: DataTypes.STRING
    },
    lat: {
        type: DataTypes.FLOAT
    },
    lng:{
        type: DataTypes.FLOAT
    },
    website:{
        type: DataTypes.STRING
    },
    deleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    active:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
    },{
        timestamps: false
    });
};