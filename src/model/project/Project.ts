import { projects } from "@/data/projects";

import { ProjectType } from "./ProjectType";

export type Project = {
    bannerImage: string;
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
    map: { src: string };
};

export interface ProjectLight {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

export function mapProjectToLight(project: Project): ProjectLight {
  return {
    id: project.id.toString(),
    name: project.name,
    description: project.description,
    //type: ProjectType;
    image: project.image,
    link: project.link,
  };
}
