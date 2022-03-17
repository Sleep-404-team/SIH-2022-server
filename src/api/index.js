const express = require("express");
const router = express.Router();

router.use("/internship", require("./Internships/router"));
router.use("/user", require("./Users/router"));

module.exports = router;
