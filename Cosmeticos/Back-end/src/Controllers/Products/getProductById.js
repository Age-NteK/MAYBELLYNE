const { Product } = require("../../db");

const getTutorialById = async (req, res) => {
  try {
    const { id_product } = req.params;

    const product = await Product.findOne({
      where: { id_product },
    });

    if (!product) throw new Error("Product Not Found");

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getTutorialById;
