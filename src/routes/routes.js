import { Router } from "express";
import categoriesRouter from "./categories.routes.js";
import gamesRouter from "./games.routes.js";
import customersRouter from "./customers.routes.js";
import rentalsRouter from "./rentals.routes.js";

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/games", gamesRouter);
router.use("/customers",customersRouter);
router.use("/rentals",rentalsRouter);

export default router;