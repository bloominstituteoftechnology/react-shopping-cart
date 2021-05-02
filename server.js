const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3333;

const server = express();
server.use(bodyParser.json());
server.use(cors());

// Data from https://rooted.nyc/
const plantsData = require("./data/data");

server.get("/", (req, res) => {
  res.json(plantsData);
});

server.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});

