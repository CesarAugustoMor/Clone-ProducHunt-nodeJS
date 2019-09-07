const express = require("express");
const routes = express.Router();

const ProductControler = require("./controllers/ProductController");

routes.get("/produtos", ProductControler.index);
routes.get("/produtos/:id", ProductControler.show);
routes.post("/produtos", ProductControler.store);
routes.put("/produtos/:id", ProductControler.update);
routes.delete("/produtos/:id", ProductControler.destroy);

module.exports = routes;
