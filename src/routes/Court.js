const { Router } = require("express");
const {
  getAllCourt,
  createCourt,
  getCourtID,
  updateCourt,
  deleteCourt,
} = require("../controllers/court.controller.js");

const courtRoutes = Router();

courtRoutes.get("/all", getAllCourt);
courtRoutes.get("/:id", getCourtID);
courtRoutes.post("/create", createCourt );
courtRoutes.put("/update/:id", updateCourt );
courtRoutes.delete("/delete/:id", deleteCourt );

module.exports = courtRoutes;
