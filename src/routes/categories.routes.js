import { Router } from "express";
import GetCategoriesController from "../controllers/categories/GetCategoriesController.js";
import CreateCategoryController from "../controllers/categories/CreateCategoryController.js";


const categoriesRouter = Router();

categoriesRouter.get('/',GetCategoriesController);
categoriesRouter.post('/',CreateCategoryController);

export default categoriesRouter;