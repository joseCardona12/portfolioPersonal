"use client";
import { IProject, IResponseProject } from "@/interfaces";
import "./projectStyles.css";

interface IProjectProps {
  projects: IResponseProject | null;
}
export default function Project({ projects }: IProjectProps): React.ReactNode {
  if (!projects) return null;
  return (
    <>
      {projects.projects.map((project: IProject) => (
        <div className="project">
          <img src={project.} alt="" />
        </div>
      ))}
    </>
  );
}
