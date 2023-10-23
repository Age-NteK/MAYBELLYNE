const { Router } = require("express");
const productsRouter = Router();
const getAllProducts = require("../../Controllers/Products/getAllProducts");
const getProductByName = require("../../Controllers/Products/getProductByName");
const getProductById = require("../../Controllers/Products/getProductById");

productsRouter.get("/", (req, res) => {
  const { name } = req.query;
  !name ? getAllProducts(req, res) : getProductByName(req, res);
});

productsRouter.get("/:id_product", getProductById);

module.exports = productsRouter;
