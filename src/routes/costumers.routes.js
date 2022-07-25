import { Router } from "express";
import CreateCustomerController from "../controllers/costumers/CreateCustomerController.js";
import GetCustomerByIdController from "../controllers/costumers/GetCustomerByIdController.js";
import GetCustomersController from "../controllers/costumers/GetCustomersController.js";
import UpdateCustomerController from "../controllers/costumers/UpdateCustomerController.js";

const customersRouter = Router();

customersRouter.get('/',GetCustomersController);
customersRouter.get('/:id',GetCustomerByIdController);
customersRouter.post('/',CreateCustomerController);
customersRouter.put('/:id',UpdateCustomerController);

export default customersRouter;