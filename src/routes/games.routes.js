import { Router } from "express";
import CreateGameController from "../controllers/games/CreateGameController.js";
import GetGamesController from "../controllers/games/GetGamesController.js";

const gamesRouter = Router();

gamesRouter.get('/',GetGamesController);
gamesRouter.post('/',CreateGameController);

export default gamesRouter;