import { IHomeView } from "../interfaces/homeViewInterface";
import { injectable } from "tsyringe";

const homeViewInitial: IHomeView = {
    titleSmall: "Hey, I am Jose Cardona",
    title: "Designer - Dev FullStack",
    description: "description",
    urlImage: "/images/me.png"
}

@injectable()
export default class HomeViewModel{
    async getHomeView():Promise<IHomeView | null>{
        return homeViewInitial
    }
}