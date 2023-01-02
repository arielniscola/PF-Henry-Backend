const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {

    sequelize.define('court', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        numberCourt:{ 
            type: DataTypes.INTEGER,
            // allowNull: false,
            // unique: true
        },
        description:{
            type: DataTypes.STRING
        },
        type_Court: {
            type: DataTypes.STRING
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }
    ,{
        timestamps: false
    }
    );
}