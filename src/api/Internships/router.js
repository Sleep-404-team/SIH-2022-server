const express = require("express");
const router = express.Router();
const { getInternships, addInternship } = require("./controller");

router.get("/", async (req, res) => {
  const result = await getInternships();
  res.send(result);
});

router.post("/", async (req, res) => {
  const result = await addInternship();
  res.send(result);
});

module.exports = router;
