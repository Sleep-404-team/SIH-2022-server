const express = require("express");
const cors = require("cors");
const config = require("./src/shared/config");
const app = express();
const DB = require("./src/shared/db");
const PORT = config.PORT;

const corsOpts = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type"],
  exposedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));
app.use(express.json());

app.use("/api/v1", require("./src/api"));

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Listening on Port: ${PORT}`)
);
