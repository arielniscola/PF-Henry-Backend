const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('config', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    open_days: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        validate:{
            isIn:['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'],
            msg: 'day does not exist'
        },
        allowNull: false,
    },
    duration_turno:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price_turno:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    },{
        timestamps: false
    });
};