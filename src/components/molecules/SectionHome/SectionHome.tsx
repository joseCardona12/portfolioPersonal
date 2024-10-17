"use client";
import "./sectionStyles.css";
import { IResponseHomeView } from "@/interfaces";
import { Button, ButtonIcon } from "@/components/atoms";
import { MdEdit } from "react-icons/md";

interface ISectionHomeProps {
  homeViewData: IResponseHomeView;
}
export default function SectionHome({ homeViewData }: ISectionHomeProps) {
  if (!homeViewData || homeViewData.message !== "correct getHomeViewService")
    return null;
  const titleSeparate: string[] = homeViewData.homeView.title.split("-");
  const descripionSeparate: string[] =
    homeViewData.homeView.description.split(".");

  const handleClickCreativeMode = (): void => {
    console.log("click");
  };
  return (
    <section className="section-home">
      <div className="home-left">
        <h5>{homeViewData.homeView.titleSmall}</h5>
        <h2>
          <span className="left-title-first">{titleSeparate[0]}</span> -
          <br />
          {titleSeparate[1]}
        </h2>
        <p>
          {descripionSeparate[0]} <br /> {descripionSeparate[1]} <br />{" "}
          {descripionSeparate[2]} <br /> {descripionSeparate[3]}
        </p>
        <Button
          text="View projects"
          color="var(--color-white)"
          backgroundColor="var(--background-color-black)"
        />
      </div>
      <div className="home-right">
        <div className="right-image">
          <img
            src={
              homeViewData.homeView.urlImage
                ? homeViewData.homeView.urlImage
                : "images/me.png"
            }
            alt="image about me"
          />
        </div>
      </div>
      <ButtonIcon
        icon={<MdEdit />}
        text="Creative mode"
        onClick={handleClickCreativeMode}
      />
    </section>
  );
}
