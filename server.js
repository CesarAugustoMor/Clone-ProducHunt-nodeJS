const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://projetos:projetos@projetos-testes-ly7qc.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
requireDir("./src/models");

app.use("/", require("./src/routes"));

app.listen(3000);
