import express from "express";
const router = express.Router();
import gamesController from '../controllers/gamesControllers.js';

router.route("/")
  .get(gamesController.getgames)
  .post(gamesController.creategames);

router.route("/:id")
  .get(gamesController.getgames)
  .put(gamesController.updategames)
  .delete(gamesController.deletegames);

export default router;