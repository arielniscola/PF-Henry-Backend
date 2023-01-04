const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "client",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      direction: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      celNumber:{
        type: DataTypes.STRING,
      },
      dni: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      country: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      profile_img: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      favorites:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: []
      },
      isOwner: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      rol:{
        type: DataTypes.STRING,
        defaultValue: "client"
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      timestamps: false,
      hooks: {
        beforeCreate: async (client) => {
          const salt = await bcrypt.genSalt(10);
          client.password = await bcrypt.hash(client.password, salt);
        },
      },
    }
  );
};

