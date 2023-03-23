const express = require("express");
const shiftController = require("../controllers/shiftController");

const router = express.Router();

router.route("/:ID").get(shiftController.getshiftsByEvent);

module.exports = router;
