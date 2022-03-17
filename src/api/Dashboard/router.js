const express = require("express");
const router = express.Router();
const { addUserDashbaord, getUserDashbaord } = require("./controller");

router.get("/:userID", async (req, res) => {
  const result = await getUserDashbaord(req.params.userID);
  res.send(result);
});

router.post("/", async (req, res) => {
  const data = {
    userId: "mdfarhaan",
    name: "Md Farhaan",
    view: "23",
    active: "3",
    applied: "10",
  };
  const result = await addUserDashbaord(data);
  res.send(result);
});

module.exports = router;
