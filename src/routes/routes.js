import { Router } from "express";
import categoriesRouter from "./categories.routes.js";
import gamesRouter from "./games.routes.js";
import customersRouter from "./costumers.routes.js";

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/games", gamesRouter);
router.use("/customers",customersRouter);

export default router;