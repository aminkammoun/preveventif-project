require("dotenv").config();
const express = require("express");
const app = express();
const pannesRouter = require("./api/panne/router/panne.router");

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-www-form-urlencoded,Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/api/panne", pannesRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
