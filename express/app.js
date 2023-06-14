const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const serverless = require("serverless-http");
const mailController = require("./mailController");

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(morgan("dev"));

app.post("/api/contact", mailController.sendEmail);
// app.post("/.netlify/functions/app/api/contact", mailController.sendEmail);

app.get("/api/contact", (req, res) => res.send("/api/contact"));
// app.get("/.netlify/functions/app/api/contact", (req, res) =>
//   res.send("/.netlify/functions/app/api/contact")
// );
app.use("/", (req, res) => res.sendFile(path.join(__dirname, "../index.html")));

// app.get("/", (req, res) => res.send("Tyrese Personal WebSite Backend!"));

module.exports = app;
module.exports.handler = serverless(app);
