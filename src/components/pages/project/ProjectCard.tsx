import {ProjectLight} from "@/model/project/Project";
import React from "react";
import MotionUpDiv from "@/components/MotionUpDiv";
import Image from "next/image";
import {pathPrefix} from "@/utils/Constent";
import {Button, Link} from "@nextui-org/react";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
    project: ProjectLight;
    priority?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({project, priority = false, ...props}) => {
    return (
        <div {...props}>
            <div className="max-w-[500px]">
                <MotionUpDiv viewportAmount={0.2}>
                    <div className="absolute translate-y-12">
                        <p className="bg-primary text-primary-foreground p-2 text-lg md:text-2xl lg:text-3xl w-fit ">{project.name}</p>
                        <p className="bg-secondary text-secondary-foreground text-sm md:text-xl lg:text-2xl p-2 pe-6 lg:me-4 w-2/3">{project.description}</p>
                    </div>
                    <Image 
                        src={pathPrefix + project.image} 
                        alt={`${project.name} - مشروع رواس`}
                        width={550} 
                        height={520}
                        priority={priority}
                        className="rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                </MotionUpDiv>

                <MotionUpDiv className="w-full flex justify-center">
                    <Button href={pathPrefix + project.link} as={Link} className="mt-5 p-6 lg:w-2/3 lg:text-xl" color="primary">
                        لمشاهدة التفاصيل
                    </Button>
                </MotionUpDiv>
            </div>
        </div>
    );
}
