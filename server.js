const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://projetos:projetos@projetos-testes-ly7qc.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
require("./src/models/Product");

app.use("/", require("./src/routes"));

app.listen(3000);
