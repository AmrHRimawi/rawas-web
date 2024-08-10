"use client";

import {useParams} from "next/navigation";
import ImageSlider from "@/components/ImageSlider";
import SuggestedCarousel from "@/components/Carousel";

const ProjectPage = () => {
    const {id} = useParams<{ id: string }>();
    // const { data } = useQuery(['project', id], () => getProject(id));

    return (
        <div className="flex flex-col justify-center items-center w-3/4 h-lvh">
            {/*<h1>Project Page {id}</h1>*/}
            {/*<h1>{data?.name}</h1>*/}
            {/*<p>{data?.description}</p>*/}

            <ImageSlider/>
            <div/>
            <SuggestedCarousel/>
        </div>
    );
}

export default ProjectPage;