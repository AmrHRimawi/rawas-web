import React from "react";
import AppTitle from "@/components/AppTitle";
import MotionUpDiv from "@/components/MotionUpDiv";
import { ProjectCard } from "@/components/pages/project/ProjectCard";
import { projects as allProjects } from "@/model/project/ProjectData";

export default function Projects() {
  return (
    <section className="w-full p-6 lg:p-16">
      <div className="h-24" />
      <MotionUpDiv>
        <AppTitle text="ـشاريعنا" prefix="مـ" />
      </MotionUpDiv>
      <div className="h-24" />

      {/* Dynamic Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {Object.values(allProjects).map((project) => (
          <ProjectCard
            key={project.id}
            project={{
              ...project,
              id: String(project.id), // convert number to string
              image: project.bannerImage,
              link: `/projects/${project.id}`,
            }}
          />
        ))}
      </div>

      <div className="h-24" />
    </section>
  );
}
