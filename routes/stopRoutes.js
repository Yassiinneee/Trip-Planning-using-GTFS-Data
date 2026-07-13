const express = require("express");

const router = express.Router();

const {
    loadStops,
    getStops,
    getStop
} = require("../controllers/stopController");

router.get("/load", loadStops);

router.get("/stops", getStops);

router.get("/stops/:id", getStop);

module.exports = router;