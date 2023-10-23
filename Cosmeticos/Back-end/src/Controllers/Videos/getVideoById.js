const { Video } = require("../../db");

const getVideoById = async (req, res) => {
  try {
    const { id_video } = req.params;

    const video = await Video.findOne({
      where: { id_video },
    });

    if (!video) throw new Error("Video Not Found");

    return res.status(200).json(video);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getVideoById;
