import Projects from "@/components/pages/Projects";
import {projectsMetadata} from "@/utils/MetadataUtil";
import React from "react";

export const metadata = projectsMetadata;

export default function ProjectsPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Projects/>
        </div>
    );
}
