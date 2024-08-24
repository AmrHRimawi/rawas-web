"use client";

import {useParams} from "next/navigation";
import Project from "@/pages/Project";

const ProjectPage = () => {
    const {id} = useParams<{ id: string }>();
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Project id={id}/>
        </div>
    );
}

export default ProjectPage;