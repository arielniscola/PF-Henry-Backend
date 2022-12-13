const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dvfmbsmed",
    api_key: "358332943278852",
    api_secret: "UMI-Q9hRcHgfoAMIrCXoge2OgHM"
})

module.exports = cloudinary;