const { Product } = require("../../db");
const { Op } = require("sequelize");

const getProductByName = async (req, res) => {
  try {
    const { name } = req.query;

    const product = await Product.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.eq]: name } },
          { name: { [Op.iLike]: `%${name}%` } },
        ],
      },
    });

    console.log(product);

    if (product) {
      res.status(200).json(product);
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error occurred while searching for product" });
  }
};

module.exports = getProductByName;
