import React from "react";
import AppTitle from "@/components/AppTitle";
import MotionUpDiv from "@/components/MotionUpDiv";
import {getLightProjects} from "@/model/project/ProjectData";
import {ProjectCard} from "@/components/pages/project/ProjectCard";

interface ProjectsProps {
    /** When set, show only the newest N projects (by id). */
    limit?: number;
}

export default function Projects({limit}: Readonly<ProjectsProps>) {
    const projects = getLightProjects()
        .sort((a, b) => b.id - a.id)
        .slice(0, limit);

    return (
        <section className="w-full px-6 pb-6 pt-4 lg:px-16 lg:pb-16 lg:pt-8">
            <MotionUpDiv>
                <AppTitle text="مشاريعنا" prefix=""/>
            </MotionUpDiv>

            <div className="h-12 md:h-16"/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-items-center">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        priority={index < 2}
                    />
                ))}
            </div>

            <div className="h-16 md:h-24"/>
        </section>
    );
}
