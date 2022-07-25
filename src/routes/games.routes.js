import { Router } from "express";
import CreateGameController from "../controllers/games/createGameController.js";
import GetGamesController from "../controllers/games/getGamesController.js";

const gamesRouter = Router();

gamesRouter.get('/',GetGamesController);
gamesRouter.post('/',CreateGameController);

export default gamesRouter;