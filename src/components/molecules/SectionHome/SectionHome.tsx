"use client";
import "./sectionStyles.css";
import { IResponseHomeView } from "@/interfaces";

interface ISectionHomeProps{
    homeViewData: IResponseHomeView | null | {message:string}
}
export default function SectionHome({homeViewData}: ISectionHomeProps){
    console.log(homeViewData)
    return( 
        <section className="section-home">
            <div className="home-left">
                Information coder...
            </div>
            <div className="home-right">
                Image coder...
            </div>
        </section>
    )
}