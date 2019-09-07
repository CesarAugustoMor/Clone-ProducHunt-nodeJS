const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async index(req, resp) {
    const produts = await Product.find();

    return resp.json(produts);
  }
};
