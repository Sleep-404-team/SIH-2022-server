const express = require("express");
const router = express.Router();
const {
  getInternships,
  addInternship,
  getInternshipsID,
} = require("./controller");

router.get("/", async (req, res) => {
  const result = await getInternships(req.query);
  res.send(result);
});

router.get("/:Id", async (req, res) => {
  const result = await getInternshipsID(req.params.Id);
  res.send(result);
});

router.post("/", async (req, res) => {
  const result = await addInternship();
  res.send(result);
});

module.exports = router;
