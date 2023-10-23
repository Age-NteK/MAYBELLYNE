const { Video } = require("../../db");

const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.findAll();

    if (!videos) throw Error("Videos Not Found");

    return res.status(200).json(videos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllVideos;