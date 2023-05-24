const express = require("express");

const filmController = require("../controllers/filmController");

const router = express.Router();

router.route("/").get(filmController.getfilms);

module.exports = router;
