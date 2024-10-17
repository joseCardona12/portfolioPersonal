import "./sectionStyles.css";
import Project from "@/components/Project/Project";

export default function SectionProjects(): React.ReactNode {
  return (
    <section className="section-projects">
      <div className="project-title">
        <h2 className="title">Projects</h2>
      </div>
      <div className="projects-content">
        <Project />
      </div>
    </section>
  );
}
