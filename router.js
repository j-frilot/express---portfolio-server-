const express = require("express");
const router = express.Router();
const PORT = process.env.PORT || 5000;

router.use("/experience", require("./routes/experienceRoutes"));

module.exports = router;
