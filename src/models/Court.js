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
        typeCourt: {
            type: DataTypes.STRING
        }
    }
    ,{
        timestamps: false
    }
    );
}