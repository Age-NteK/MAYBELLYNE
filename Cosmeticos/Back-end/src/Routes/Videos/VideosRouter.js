const { Router } = require("express");
const videosRouter = Router();
const getAllVideos = require("../../Controllers/Videos/getAllVideos");
const getVideoById = require("../../Controllers/Videos/getVideoById");

videosRouter.get("/", getAllVideos);

videosRouter.get("/:id_video", getVideoById);

module.exports = videosRouter;
