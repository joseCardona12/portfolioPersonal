import { IResponseHomeView } from "@/interfaces";
import { fetchApi } from "@/utils/fetchApi";

export async function getHomeViewService():Promise<IResponseHomeView>{
    const data = await fetchApi("http://localhost:4000/api/homeView");
    return data;
}