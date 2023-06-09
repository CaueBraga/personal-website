import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import data from "../data/data.json";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-24" id="projects">
      <div className="text-section-title text-3xl font-medium">Projects</div>
      <div className="mt-6 md:mb-4 border-b-8 border-b-base-purple w-16" />
      {data &&
        data.projects.map((_project: any, index: number) => {
          return <ProjectCard key={index} index={index} />;
        })}
    </div>
  );
};

export default Projects;
