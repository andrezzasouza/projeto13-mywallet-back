import { Router } from "express";
import { createUser } from "../controllers/userController.js";
import { userSchemaValidation } from "../middleware/userSchemaValidation.js";

const userRouter = Router();

userRouter.post("/users", userSchemaValidation, createUser)

export default userRouter;