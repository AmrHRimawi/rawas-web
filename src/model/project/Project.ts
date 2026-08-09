import {ProjectType} from "@/model/project/ProjectType";

export type Project = {
    id: number;
    name: string;
    description: string;
    type: ProjectType;
    image: string;
    link: string;
    images: { src: string }[];
    properties: { src: string; alt: string; title: string; text: string }[];
    about: string;
    lookImages: { title: string; src: string }[];
    currentImages: { title: string; src: string }[];
    map: { src: string };
    values?: ProjectValue[];
};

export interface ProjectValue {
    title: string;
    text: string;
}

export type ProjectLight = {
    id: number;
    name: string;
    description: string;
    type: ProjectType;
    image: string;
    link: string;
};

export function mapProjectToLight(project: Project): ProjectLight {
    return {
        id: project.id,
        name: project.name,
        description: project.description,
        type: project.type,
        image: project.image,
        link: project.link,
    };
}
