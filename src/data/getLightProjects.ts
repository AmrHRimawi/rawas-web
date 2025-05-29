import { ProjectLight, mapProjectToLight } from "@/model/project/Project";
import { projects as allProjects } from "@/model/project/ProjectData";

export function getLightProjects(): ProjectLight[] {
  return Object.values(allProjects).map(mapProjectToLight);
}
