"use client";

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
                    <div className="relative group">
                        <div className="absolute top-2 end-2 z-10 pointer-events-none">
                            <span
                                className="px-3 py-1.5 text-sm md:text-base rounded-full text-[#2f2610] font-semibold border border-white/20 shadow-lg backdrop-blur-sm ring-1 ring-white/20 inline-flex items-center gap-2 tracking-wide"
                                style={{
                                    backgroundImage: 'linear-gradient(60deg, #8C6A00 0%, #B38728 20%, #D4AF37 40%, #FFD700 55%, #D4AF37 70%, #B38728 85%, #8C6A00 100%)'
                                }}
                            >
                                <span className="w-2 h-2 rounded-full bg-white/85"></span>
                                {project.type.name.ar}
                            </span>
                        </div>
                        <div className="absolute translate-y-12 z-10 px-2 pointer-events-none">
                            <p className="bg-primary/90 text-primary-foreground p-2 text-lg md:text-2xl lg:text-3xl w-fit ">{project.name}</p>
                            <p className="bg-secondary/90 text-secondary-foreground text-sm md:text-xl lg:text-2xl p-2 pe-6 lg:me-4 w-2/3">{project.description}</p>
                        </div>
                        <Link href={pathPrefix + project.link} aria-label={`مشروع ${project.name}`} className="block focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg">
                            <Image 
                                src={pathPrefix + project.image} 
                                alt={`${project.name} - مشروع رواس`}
                                width={550} 
                                height={520}
                                priority={priority}
                                sizes="(max-width: 768px) 100vw, 550px"
                                className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                            />
                            <span className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                        </Link>
                    </div>
                </MotionUpDiv>

                <MotionUpDiv className="mt-2 w-full flex justify-center">
                    <Button href={pathPrefix + project.link} as={Link} className="p-6 lg:w-2/3 lg:text-xl" color="primary">
                        لمشاهدة التفاصيل
                    </Button>
                </MotionUpDiv>
            </div>
        </div>
    );
}
