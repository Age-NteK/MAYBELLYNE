const { Product } = require("../../db");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    if (!products) throw Error("Products Not Found");

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllProducts;