const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const mailController = require("./mailController");
const serverless = require("serverless-http");

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use("/api/contact", mailController.sendEmail);

app.get("/", (req, res) => res.send("Tyrese Personal WebSite Backend!"));

// module.exports = app;
// exports.handler = serverless(app);
export const handler = serverless(app);
