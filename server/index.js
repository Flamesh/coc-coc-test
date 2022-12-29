const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("express-async-errors");
const cors = require("cors");
const authRouter = require("./src/auth/auth.router");
const createError = require("http-errors");

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("APP IS RUNNING");
});
app.use("/auth", authRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  res.status(err.status || 500).send(err.message);
});

const server = app.listen(3001, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
