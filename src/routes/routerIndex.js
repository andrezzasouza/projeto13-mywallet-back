import { Router } from "express";
import authenticationRouter from "./authenticationRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(authenticationRouter);
router.use(userRouter);

export default router;