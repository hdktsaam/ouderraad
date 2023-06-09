const express = require("express");
const shiftInfController = require("../controllers/shiftInvController");

const router = express.Router();

router.route("/").post(shiftInfController.addPersoonShifts);
router
  .route("/:ID")
  .get(shiftInfController.getPersonenByShift)
  .post(shiftInfController.delPersoonShift);

module.exports = router;
