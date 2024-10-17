import { SectionHome } from "@/components/molecules";
import { IResponseHomeView } from "@/interfaces";
import { getHomeViewService } from "@/services";
export default async function HomeView(){
  const homeViewData: IResponseHomeView | null | {message:string} = await getHomeViewService();
  return(
    <SectionHome homeViewData={homeViewData} />
  )
}