import { Request, Response } from "express"
import { container } from "tsyringe";
import { HomeViewService } from "../services/homeViewService";

export class HomeViewController{
    static async getHomeView(_:Request, res: Response):Promise<void>{
        try{
            const homeViewService = container.resolve(HomeViewService);
            const homeView = await homeViewService.getHomeView();
            res.json({message: "correct getHomeViewService", homeView}).status(200);

        }catch(error:unknown){
            res.json({message: "Error with the getHomeView", data: error}).status(500);
        }
    }
}