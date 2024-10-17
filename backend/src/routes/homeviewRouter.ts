import { Router } from "express";

const homeViewRouter:Router = Router();
homeViewRouter.get("/", ()=>console.log({message: "all ok"}));

export default homeViewRouter;