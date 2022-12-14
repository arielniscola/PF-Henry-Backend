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
        type: DataTypes.STRING,
        // type: DataTypes.ARRAY(DataTypes.STRING),
        // validate:{
        //     isIn:['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'],
        //     // msg: 'day does not exist'
        //     notEmpty: true
        // },
        allowNull: false,
    },
    },{
        timestamps: false
    });
};