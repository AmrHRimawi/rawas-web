import React from "react";
import AppTitle from "@/components/AppTitle";
import MotionUpDiv from "@/components/MotionUpDiv";
import {getLightProjects} from "@/model/project/ProjectData";
import {ProjectCard} from "@/components/pages/project/ProjectCard";

export default function Projects() {
    const projects = getLightProjects();

    return (
        <section className="w-full p-6 lg:p-16" aria-labelledby="projects-title">
            <div className="h-4"/>

            <MotionUpDiv><AppTitle id="projects-title" text="ـشاريعنا" prefix="مـ"/></MotionUpDiv>
            <div className="h-24"/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        priority={index < 3} // Priority loading for first 3 projects
                    />
                ))}
            </div>

            {/* <div className="h-12"/> */}
        </section>
    )
}
