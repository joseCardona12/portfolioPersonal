"use client";
import "./sectionStyles.css";
import { IResponseHomeView } from "@/interfaces";

interface ISectionHomeProps{
    homeViewData: IResponseHomeView
}
export default function SectionHome({homeViewData}: ISectionHomeProps){
    if(!homeViewData || homeViewData.message !== "correct getHomeViewService")return null
    console.log(homeViewData.homeView.urlImage)
    return( 
        <section className="section-home">
            <div className="home-left">
                <h5>{homeViewData.homeView.titleSmall}</h5>
                <h2>{homeViewData.homeView.title}</h2>
            </div>
            <div className="home-right">
                <div className="right-image">
                    <img src={homeViewData.homeView.urlImage ? homeViewData.homeView.urlImage : "images/me.png"} alt="image about me" />
                </div>
            </div>
        </section>
    )
}