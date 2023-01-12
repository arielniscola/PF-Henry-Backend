const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "mercadopago",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      access_token: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      token_type: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      expires_in:{
        type: DataTypes.STRING,
      },
      refresh_token: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      public_key: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
     
    },
    {
      timestamps: false
    }
  );
};

