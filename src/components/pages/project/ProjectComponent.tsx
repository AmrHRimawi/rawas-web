import React from "react";
import ImageSlider from "@/components/ImageSlider";
import MotionUpDiv from "@/components/MotionUpDiv";
import AppTitle from "@/components/AppTitle";
import SourceIconText from "@/components/SourceIconText";
import { Button, Link } from "@nextui-org/react";
import { AppLineSep } from "@/components/AppLineSep";
import AppTitle3 from "@/components/AppTitle3";
import MotionEndDiv from "@/components/MotionEndDiv";
import { pathPrefix } from "@/utils/Constent";
import ImageGallery from "@/components/ImageGallery";
import { Project } from "@/model/project/Project";
import ScrollProgress from "@/components/ScrollProgress";
import NormalImageGallery from "@/components/NormalImageGallery";

interface ProjectProps {
    project: Project
}

export default function ProjectComponent({ project }: Readonly<ProjectProps>) {
    console.log("project id: ", project.id);
    const titlePrefix = project.name.substring(0, 1);
    const titleText = project.name.substring(1);
    return (
        <>
            <ScrollProgress />
            <section className="w-full p-1 md:p-6 lg:p-14">

                <MotionUpDiv><AppTitle text={titleText} prefix={titlePrefix} /></MotionUpDiv>
                <div className="h-24" />

                <div className="flex flex-col justify-center items-center w-full">

                    <MotionUpDiv className="w-full lg:w-5/6" viewportAmount={0.2}><ImageSlider images={project.images} /></MotionUpDiv>
                    <div className="h-12" />


                    <div className="w-5/6 flex flex-col justify-center items-start gap-1">
                        {project.properties.map((property, index) => (
                            <MotionEndDiv key={"i:" + index} className="flex justify-start items-start"><SourceIconText src={property.src} alt={property.alt}>
                                <span className="font-medium">{property.title}</span>: {property.text}
                            </SourceIconText></MotionEndDiv>
                        ))}

                    </div>



                    {project.values && project.values.length > 0 && (
                        <>
                            <AppTitle3 text="الممارسات والقيم في المشروع" />

                            <div className="h-16" />

                            <div className="w-full flex flex-wrap justify-center gap-8">
                                {project.values.map((value, index) => (
                                    <MotionUpDiv
                                        key={`project-value-${index}`}
                                        viewportAmount={0.3}
                                        className="relative w-full max-w-124 p-4 mb-8"
                                    >
                                        <div className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-background border-5 border-secondary rounded-full w-24 h-24 flex items-center justify-center">
                                            <p className="text-secondary text-4xl font-bold">
                                                {index + 1}
                                            </p>
                                        </div>

                                        <div className="text-center border-5 border-secondary rounded-6xl min-h-[500px] px-8 pt-16 pb-8 flex flex-col items-center justify-center">
                                            <p className="text-primary font-bold text-xl">

                                            </p>

                                            <p className="text-primary mt-4 leading-8">
                                                {value.text}
                                            </p>
                                        </div>
                                    </MotionUpDiv>
                                ))}
                            </div>

                            <div className="h-12" />
                        </>
                    )}
                    <div className="h-12" />
                    <MotionUpDiv className="w-11/12 md:w-5/6" viewportAmount={0.2}>
                        <p className="bg-foreground-100 rounded-2xl md:ps-14 pt-14 pb-8 md:pe-4">{project.about}</p>
                    </MotionUpDiv>
                    <div className="h-12" />



                    <MotionUpDiv className="w-full flex justify-center">
                        <Button href={`${pathPrefix}/contact-us`} as={Link} className="mt-5 p-6 lg:w-1/2 text-xl" color="primary">للاستفسار تواصل معنا</Button>
                    </MotionUpDiv>
                    <div className="h-12" />

                    <AppLineSep />
                    <div className="h-12" />
                    <AppTitle3 text="مخططات الطوابق والوحدات المتاحة" />


                    <div className="h-16" />
                    <MotionUpDiv className="w-full flex flex-col justify-center items-center" viewportAmount={0.2}>
                        <p className="text-xl lg:text-2xl"></p>

                        <NormalImageGallery images={project.lookImages} />

                    </MotionUpDiv>
                    <p className="text-xl lg:text-2xl">
                        اضغط على الصورة لعرضها بالحجم الكامل
                    </p>
                    <div className="h-24" />
                    <AppTitle3 text="اخر مراحل التنفيذ " />


                    <div className="h-24" />
                    <MotionUpDiv className="w-full flex flex-col justify-center items-center" viewportAmount={0.2}>
                        <p className="text-xl lg:text-2xl"></p>
                        <div className="h-8" />

                        <NormalImageGallery images={project.CertainImages} />
                    </MotionUpDiv>
                    <p className="text-xl lg:text-2xl"></p>

                    <AppTitle3 text="موقع المشروع على الخريطة" />
                    <div className="h-8" />
                    <MotionUpDiv className="w-full" viewportAmount={0.2}>
                        <iframe title={"project location"} src={project.map.src} width="100%" height="600" style={{ border: 0 }}
                            allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </MotionUpDiv>

                    <div className="h-12" />
                    <AppLineSep />

                </div>

            </section>
        </>
    )
}
