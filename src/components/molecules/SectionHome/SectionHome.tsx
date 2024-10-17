"use client";
import "./sectionStyles.css";
import { IResponseHomeView } from "@/interfaces";
import { Button } from "@/components/atoms";

interface ISectionHomeProps{
    homeViewData: IResponseHomeView
}
export default function SectionHome({homeViewData}: ISectionHomeProps){
    if(!homeViewData || homeViewData.message !== "correct getHomeViewService")return null
    const titleSeparate:string[] = homeViewData.homeView.title.split("-"); 
    return( 
        <section className="section-home">
            <div className="home-left">
                <h5>{homeViewData.homeView.titleSmall}</h5>
                <h2>
                    {titleSeparate[0]} 
                    <br /> 
                    {titleSeparate[1]}
                </h2>
                <p>{homeViewData.homeView.description}</p>
                <Button text="Know more" color="var(--color-white)" backgroundColor="var(--background-color-black)" />
                
            </div>
            <div className="home-right">
                <div className="right-image">
                    <img src={homeViewData.homeView.urlImage ? homeViewData.homeView.urlImage : "images/me.png"} alt="image about me" />
                </div>
            </div>
        </section>
    )
}