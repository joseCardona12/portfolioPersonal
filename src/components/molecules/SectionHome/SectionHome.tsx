"use client";
import "./sectionStyles.css";
import { IComment, IResponseHomeView } from "@/interfaces";
import { Button, ButtonIcon, Input } from "@/components/atoms";
import { MdEdit } from "react-icons/md";
import { useState } from "react";

interface ISectionHomeProps {
  homeViewData: IResponseHomeView;
}
export default function SectionHome({ homeViewData }: ISectionHomeProps) {
  if (!homeViewData || homeViewData.message !== "correct getHomeViewService")
    return null;
  const titleSeparate: string[] = homeViewData.homeView.title.split("-");
  const descripionSeparate: string[] =
    homeViewData.homeView.description.split(".");

  const initialTitleSmall: string = ""; // State initial for change
  const [creativeMode, setCreativeMode] = useState<boolean>(false);
  const commentData: IComment[] = [
    { name: "html", text: "HTML" },
    { name: "css", text: "CSS" },
    { name: "js", text: "JavaScript" },
    { name: "ts", text: "TypeScript" },
    { name: "react", text: "React" },
  ];

  const handleClickCreativeMode = (): void => {
    setCreativeMode(!creativeMode);
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
        {commentData.map((item: IComment, index: number) => (
          <div className={`comment comment${index}`}>{item.text}</div>
        ))}
      </div>
      <ButtonIcon
        icon={<MdEdit />}
        text="Creative mode"
        onClick={handleClickCreativeMode}
      />
    </section>
  );
}
