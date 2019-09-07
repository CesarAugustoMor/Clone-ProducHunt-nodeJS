const express = require("express");
const routes = express.Router();

const ProductControler = require("./controllers/ProductController");
routes.get("/produtos", ProductControler.index);

module.exports = routes;
