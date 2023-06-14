const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const serverless = require("serverless-http");
const mailController = require("./mailController");

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use("/api/contact", mailController.sendEmail);
app.use("/.netlify/functions/api/contact", mailController.sendEmail); // path must route to lambda

app.get("/", (req, res) => res.send("Tyrese Personal WebSite Backend!"));

module.exports = app;
module.exports.handler = serverless(app);
