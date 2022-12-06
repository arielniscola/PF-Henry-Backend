const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {

    sequelize.define('Court', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        numberCourt:{ 
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        description:{
            type: DataTypes.STRING
        },
        typeCourt: {
            type: DataTypes.STRING
        }
     },{
        timestamps: false
      }
    );
}