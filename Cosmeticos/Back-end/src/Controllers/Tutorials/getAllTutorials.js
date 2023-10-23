const { Tutorial } = require("../../db");

const getAllTutorials = async (req, res) => {
  try {
    const tutorials = await Tutorial.findAll();

    if (!tutorials) throw Error("Tutorials Not Found");

    return res.status(200).json(tutorials);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllTutorials;