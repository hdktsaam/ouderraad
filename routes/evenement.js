const express = require("express");
const evenementController = require("../controllers/evenementController");

const router = express.Router();

router
  .route("/")
  .get(evenementController.getEvenementen)
  .post(evenementController.addEvenement)
  .put(evenementController.updateEvenement);

module.exports = router;
