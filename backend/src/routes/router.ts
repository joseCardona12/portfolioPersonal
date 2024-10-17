import { Router } from "express";
import homeViewRouter from "./homeviewRouter";

const router = Router();
router.use("/homeView", homeViewRouter);

export default router;