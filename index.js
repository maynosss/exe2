const express = require("express");
const routes = require("./routes/todoroutes");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.port || 3100;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Mongo DB started");
});

app.use(routes);
app.listen(port, () => {
  console.log("server started");
});
