const express = require("express");
const router = express.Router();
const PORT = process.env.PORT || 5000;

router.get("/", (req, res) => {
    res.json({
        Experience: `https://joshuafrilot.com/api/experience`
    });
});

router.use("/experience", require("./routes/experienceRoutes"));

module.exports = router;
