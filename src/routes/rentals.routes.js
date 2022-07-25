import { Router } from "express";
import CreateRentalController from "../controllers/rentals/createRentalController.js";
import DeleteRentalController from "../controllers/rentals/deleteRentalController.js";
import FinalizeRentalController from "../controllers/rentals/finalizeRentalController.js";
import GetRentalsController from "../controllers/rentals/getRentalsController.js";

const rentalsRouter = Router();

rentalsRouter.get('/',GetRentalsController);
rentalsRouter.post('/',CreateRentalController);
rentalsRouter.post('/:id/return',FinalizeRentalController);
rentalsRouter.delete('/:id',DeleteRentalController);

export default rentalsRouter;