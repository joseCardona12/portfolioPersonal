import { IResponseHomeView } from "@/interfaces";
import { fetchApi } from "@/utils/fetchApi";

export async function getHomeViewService():Promise<IResponseHomeView | null | {message: string}>{
    const data = await fetchApi("http://localhost:4000/api/homeView");
    console.log(data);
    return data;
}