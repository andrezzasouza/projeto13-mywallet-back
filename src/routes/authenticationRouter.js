import { Router } from "express";
import { login } from "../controllers/authenticationController.js";
import { loginSchemaValidation } from "../middleware/loginSchemaValidation.js";

const authenticationRouter = Router();

userRouter.post("/login", loginSchemaValidation, login)

export default authenticationRouter;