import Project from '@/components/pages/Project';
import {projectMetadata} from '@/utils/MetadataUtil';

interface ProjectPageProps {
    params: {
        id: string;
    };
}

const ProjectPage = ({params}: ProjectPageProps) => {
    const {id} = params;

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Project id={id}/>
        </div>
    );
};

export async function generateMetadata({params}: { params: { id: string } }) {
    return projectMetadata(params.id);
}

export const generateStaticParams = async () => {
    // Fetch the list of project IDs from your data source
    const projects = [{id: 1}]; // Example data
    const paths = projects.map((project) => ({
        id: project.id.toString(),
    }));

    return paths;
};

export default ProjectPage;

