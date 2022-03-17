const express = require("express");
const router = express.Router();
const { getUser, addUser } = require("./controller");

router.get("/:userID", async (req, res) => {
  const result = await getUser(req.params.userID);
  res.send(result);
});

router.post("/", async (req, res) => {
  const result = await addUser();
  res.send(result);
});

module.exports = router;
