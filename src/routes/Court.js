const { Router } = require("express");
const {
  getAllCourt,
  createCourt,
  getCourtID,
  updateCourt,
  deleteCourt,
  getCourtComplex
} = require("../controllers/court.controller.js");

const courtRoutes = Router();

courtRoutes.get("/all", getAllCourt);
courtRoutes.get("/:id", getCourtID);
courtRoutes.post("/create", createCourt );
courtRoutes.put("/update/:id", updateCourt );
courtRoutes.delete("/delete/:id", deleteCourt );
courtRoutes.get("/complex-court/:id", getCourtComplex)

module.exports = courtRoutes;
