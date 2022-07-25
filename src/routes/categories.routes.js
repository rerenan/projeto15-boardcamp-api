import { Router } from "express";
import GetCategoriesController from "../controllers/categories/GetCategoriesController.js";
import PostCategoriesController from "../controllers/categories/PostCategoriesController.js";


const categoriesRouter = Router();

categoriesRouter.get('',GetCategoriesController);
categoriesRouter.post('',PostCategoriesController);

export default categoriesRouter;