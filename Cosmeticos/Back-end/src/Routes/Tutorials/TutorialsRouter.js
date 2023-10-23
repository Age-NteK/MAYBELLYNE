const { Router } = require("express");
const tutorialsRouter = Router();
const getAllTutorials = require("../../Controllers/Tutorials/getAllTutorials");
const getTutorialById = require("../../Controllers/Tutorials/getTutorialById");

tutorialsRouter.get("/", getAllTutorials);

tutorialsRouter.get("/:id_tutorial", getTutorialById);

module.exports = tutorialsRouter;
