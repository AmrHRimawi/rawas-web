import ProjectComponent from '@/components/pages/project/ProjectComponent';
import {getProjectById, getProjectsIds} from "@/model/project/ProjectData";
import {projectMetadata} from '@/utils/MetadataUtil';

interface ProjectPageProps {
    params: {
        id: string;
    };
}

const ProjectPage = ({params}: ProjectPageProps) => {
    const {id} = params;
    const project = getProjectById(Number(id));
    
    if (!project) {
        return (
            <div className="w-full flex flex-col justify-center items-center h-72">
                <h1 className="text-2xl font-bold text-center text-primary">المشروع غير موجود</h1>
                <p className="text-center mt-4 text-secondary">لم يتم العثور على المشروع المطلوب</p>
            </div>
        );
    }
    
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <ProjectComponent project={project}/>
        </div>
    );
};

export async function generateMetadata({params}: { params: { id: string } }) {
    return projectMetadata(params.id);
}

export const generateStaticParams = async () => {
    // Fetch the list of project IDs from your data source
    return getProjectsIds().map((id) => ({id: id}));
};

export default ProjectPage;
