const { Tutorial } = require("../../db");

const getTutorialById = async (req, res) => {
  try {
    const { id_tutorial } = req.params;

    const tutorial = await Tutorial.findOne({
      where: { id_tutorial },
    });

    if (!tutorial) throw new Error("Tutorial Not Found");

    return res.status(200).json(tutorial);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getTutorialById;