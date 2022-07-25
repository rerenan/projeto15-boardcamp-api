import { Router } from "express";
import GetCategoriesController from "../controllers/categories/GetCategoriesController.js";


const categoriesRouter = Router();

categoriesRouter.get('',GetCategoriesController);
export default categoriesRouter;