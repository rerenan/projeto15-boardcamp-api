import { Router } from "express";
import CreateCustomerController from "../controllers/customers/createCustomerController.js";
import GetCustomerByIdController from "../controllers/customers/getCustomerByIdController.js";
import GetCustomersController from "../controllers/customers/getCustomersController.js";
import UpdateCustomerController from "../controllers/customers/updateCustomerController.js";

const customersRouter = Router();

customersRouter.get('/',GetCustomersController);
customersRouter.get('/:id',GetCustomerByIdController);
customersRouter.post('/',CreateCustomerController);
customersRouter.put('/:id',UpdateCustomerController);

export default customersRouter;