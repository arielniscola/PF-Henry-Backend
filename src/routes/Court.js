const { Router } = require("express");
const {
  getAllCourt,
  createCourt,
  getCourtID,
  updateCourt,
  deleteCourt,
} = require("../controllers/court.controller.js");

const courtRoutes = Router();

courtRoutes.get("/", getAllCourt);
courtRoutes.get("/:id", getCourtID);
courtRoutes.post("/", createCourt );
courtRoutes.put("/update", updateCourt );
courtRoutes.delete("/delete", deleteCourt );

module.exports = courtRoutes;
