const express = require("express");
const {
  getbyid,
  getbyName,
  getInfo,
  postRoute,
} = require("../../control/controllerUsers/index.js");

const router = express.Router();

router.get("/:id", getbyid);
router.get("/", getbyName);
router.get("/", getInfo);
router.post("/", postRoute);

module.exports = router;
