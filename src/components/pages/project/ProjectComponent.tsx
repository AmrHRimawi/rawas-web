import React from "react";
import ImageSlider from "@/components/ImageSlider";
import MotionUpDiv from "@/components/MotionUpDiv";
import AppTitle from "@/components/AppTitle";
import SourceIconText from "@/components/SourceIconText";
import {Button, Link} from "@nextui-org/react";
import {AppLineSep} from "@/components/AppLineSep";
import AppTitle3 from "@/components/AppTitle3";
import MotionEndDiv from "@/components/MotionEndDiv";
import {pathPrefix} from "@/utils/Constent";
import ImageGallery from "@/components/ImageGallery";
import {Project} from "@/model/project/Project";

interface ProjectProps {
    project: Project
}

export default function ProjectComponent({project}: Readonly<ProjectProps>) {
    console.log("project id: ", project.id);
    const titlePrefix = project.name.substring(0, 1);
    const titleText = project.name.substring(1);
    return (
        <section className="w-full p-1 md:p-6 lg:p-14">

            <MotionUpDiv><AppTitle text={titleText} prefix={titlePrefix}/></MotionUpDiv>
            <div className="h-24"/>

            <div className="flex flex-col justify-center items-center w-full">

                <MotionUpDiv className="w-full lg:w-5/6" viewportAmount={0.2}><ImageSlider images={project.images}/></MotionUpDiv>
                <div className="h-12"/>


                <div className="w-5/6 flex flex-col justify-center items-start gap-1">
                    {project.properties.map((property, index) => (
                        <MotionEndDiv key={"i:" + index} className="flex justify-start items-start"><SourceIconText src={property.src} alt={property.alt}>
                            <span className="font-medium">{property.title}</span>: {property.text}
                        </SourceIconText></MotionEndDiv>
                    ))}

                </div>
                <div className="h-12"/>
                <MotionUpDiv className="w-11/12 md:w-5/6" viewportAmount={0.2}>
                    <h2 className="text-2xl font-medium bg-primary w-fit p-4 rounded-lg translate-y-8 -translate-x-12 text-primary-foreground">نبذه عن المشروع :</h2>
                    <p className="bg-foreground-100 rounded-2xl md:ps-14 pt-14 pb-8 md:pe-4">{project.about}</p>
                </MotionUpDiv>
                <div className="h-12"/>

                <MotionUpDiv className="w-full flex justify-center">
                    <Button href={`${pathPrefix}/contact-us`} as={Link} className="mt-5 p-6 lg:w-1/2 text-xl" color="primary">للاستفسار تواصل معنا</Button>
                </MotionUpDiv>
                <div className="h-12"/>

                <AppLineSep/>
                <div className="h-12"/>
                <AppTitle3 text="اطلالات المشروع"/>


                <div className="h-24"/>
                <MotionUpDiv className="w-full flex flex-col justify-center items-center" viewportAmount={0.2}>
                    <p className="text-xl lg:text-2xl">اضغط على الصورة لتظهر بخاصية 360</p>
                    <div className="h-8"/>
                    <ImageGallery images={project.lookImages}/>
                </MotionUpDiv>
                <div className="h-24"/>

                {/*<MotionUpDiv className="flex justify-center items-center" viewportAmount={0.2}><Carousel images={project.lookImages}/></MotionUpDiv>*/}
                {/*<div className="h-24"/>*/}

                <AppTitle3 text="موقع المشروع على الخريطة"/>
                <div className="h-8"/>
                <MotionUpDiv className="w-full" viewportAmount={0.2}>
                    <iframe title={"project location"} src={project.map.src} width="100%" height="600" style={{border: 0}}
                            allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </MotionUpDiv>

                <div className="h-12"/>
                <AppLineSep/>

            </div>

        </section>
    )
}
