const express = require("express");
const router = express.Router();
const { experienceQueries: query } = require("../queries/Query");

// all experience icons    ${port}/api/experience
router.get("/", (req, res) => {
    query.findAll(res, query.table);
});

module.exports = router;
