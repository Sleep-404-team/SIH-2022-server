const express = require("express");
const router = express.Router();

router.use("/internship", require("./Internships/router"));

module.exports = router;
