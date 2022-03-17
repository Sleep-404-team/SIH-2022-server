const express = require("express");
const router = express.Router();

router.use("/internship", require("./Internships/router"));
router.use("/user", require("./Users/router"));
router.use("/dashboard", require("./Dashboard/router"));

module.exports = router;
