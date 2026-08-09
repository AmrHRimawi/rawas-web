import Projects from "@/components/pages/project/Projects";
import {projectsMetadata} from "@/utils/MetadataUtil";
import React from "react";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata = projectsMetadata;

export default function ProjectsPage() {
    return (
        <div className="relative w-full flex flex-col justify-center items-center pt-16 md:pt-12">
            <ParticleBackground/>
            <Projects/>
        </div>
    );
}
