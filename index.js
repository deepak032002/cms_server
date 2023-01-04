const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const vacancy = require("./routes/vacancy/index.js");
require("./db")();
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));
app.use("/vacancy/", vacancy);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
