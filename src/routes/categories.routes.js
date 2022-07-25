import { Router } from "express";
import GetCategoriesController from "../controllers/categories/getCategoriesController.js";
import CreateCategoryController from "../controllers/categories/createCategoryController.js";


const categoriesRouter = Router();

categoriesRouter.get('/',GetCategoriesController);
categoriesRouter.post('/',CreateCategoryController);

export default categoriesRouter;