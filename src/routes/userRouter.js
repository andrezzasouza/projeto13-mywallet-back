import { Router } from "express";
import { createUser, createIncome } from "../controllers/userController.js";
import { userSchemaValidation } from "../middleware/userSchemaValidation.js";
import { incomeSchemaValidation } from "../middleware/incomeSchemaValidation.js";
import { tokenValidation } from "../middleware/tokenValidation.js";

const userRouter = Router();

userRouter.post("/users", userSchemaValidation, createUser);
userRouter.post("/users/income", tokenValidation, incomeSchemaValidation, createIncome);
export default userRouter;