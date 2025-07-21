import React from "react";
import AppTitle from "@/components/AppTitle";
import MotionUpDiv from "@/components/MotionUpDiv";
import {getLightProjects} from "@/model/project/ProjectData";
import {ProjectCard} from "@/components/pages/project/ProjectCard";

export default function Projects() {
    return (
        <section className="w-full p-6 lg:p-16">
            <div className="h-24"/>
            <MotionUpDiv><AppTitle text="ـشاريعنا" prefix="مـ"/></MotionUpDiv>
            <div className="h-24"/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                {getLightProjects().map(p => <ProjectCard key={p.id} project={p}/>)}
            </div>

            <div className="h-24"/>

        </section>
    )
}
