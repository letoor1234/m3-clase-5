require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

const userRoutes = require("./routes/users");

app.use("/", userRoutes);

app.listen(process.env.PORT, () =>
  console.log("Server init on port: ", process.env.PORT)
);
