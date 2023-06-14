const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const serverless = require("serverless-http");
const mailController = require("./mailController");

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/api/contact", mailController.sendEmail);
app.get("/", (req, res) => res.send("Tyrese Personal WebSite Backend!"));

module.exports = app;
module.exports.handler = serverless(app);
