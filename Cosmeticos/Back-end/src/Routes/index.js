const express = require("express");
const router = express.Router();
const productsRouter = require("./Products/ProductsRouter");
const videosRouter = require("./Videos/VideosRouter");
const tutorialsRouter = require("./Tutorials/TutorialsRouter");
// const favoritesRouter = require("./Favorites/FavoritesRouter");
// const usersRouter = require("./Users/UsersRouter");

router.use("/products", productsRouter);
router.use("/videos", videosRouter);
router.use("/tutorials", tutorialsRouter);
// router.use("/favorites", favoritesRouter);
// router.use("/users", usersRouter);

module.exports = router;
