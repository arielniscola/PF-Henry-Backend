const jwt = require("jsonwebtoken");
const { Client, Complejo } = require("../db");

const checkAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "kljlksdjf2oi3jlkj32");
      req.user = await Client.findOne({
        where: { id: decoded.id },
        attributes: {
          exclude: ["password"],
        },
        include:[Complejo]
      });
      return next();
    } catch (error) {
      return res.status(404).json({ msg: "Error checking token" });
    }
  }
  if (!token) {
    const error = new Error("Token not valid");
    res.status(401).json({ msg: error.message });
  }
  next();
};

module.exports = { checkAuth };
