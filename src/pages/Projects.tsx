import React from "react";
import "./Projects.css"
import AppTitle from "@/components/AppTitle";
import MotionDiv from "@/components/MotionDiv";
import {Button, Link} from "@nextui-org/react";

export default function Projects() {
    return (
        <div className="w-5/6">
            <div className="h-24"/>
            <MotionDiv><AppTitle text="ـشاريعنا" prefix="مـ"/></MotionDiv>
            <div className="h-24"/>

            <div className="flex flex-col lg:flex-row border-1 bg-foreground-50">
                <MotionDiv className="projects-img w-full">
                    <div className="absolute translate-y-12">
                        <p className="bg-primary text-primary-foreground p-3 text-2xl lg:text-3xl w-fit ">مشروع رواس</p>
                        <p className="bg-secondary text-secondary-foreground text-xl lg:text-2xl p-3 pe-6 lg:me-4">رام الله - عين مصباح - مقابل برج الاذاعة</p>
                    </div>
                </MotionDiv>
                <div className="flex flex-col justify-evenly items-start p-12 text-2xl">
                    <MotionDiv className="w-full flex flex-col justify-evenly items-start h-full">
                        <p className="text-3xl font-bold">مشروع رواس</p>
                        <p>رام الله - عين مصباح - مقابل برج الاذاعة</p>
                        <div className="h-1 w-3/4 border-b-1 m-1 shadow-xl"/>
                        <p>موقف سيارات خاصة - مخازن خاصة - واجهات بانوراما
                            عزل ممتاز للعوامل الخارجية</p>
                        <div className="h-1 w-3/4 border-b-1 m-1 shadow-xl"/>

                    </MotionDiv>
                    <MotionDiv className="w-full flex flex-col justify-evenly items-start h-full">
                        <p className="text-3xl font-bold">التفاصيل</p>
                        <p>7 طوابق</p>
                        <p>3 مداخل</p>
                        <p>مقسم الى 25 مكتب مع امكانية الدمج</p>
                        <p>مساحات متنوعة</p>

                        <div className="w-full flex justify-center">
                            <Button href="/projects/1" as={Link} className="mt-5 p-6 w-2/3 text-xl" color="primary">
                                لمشاهدة التفاصيل
                            </Button>
                        </div>
                    </MotionDiv>
                </div>
            </div>
            <div className="h-24"/>

        </div>
    )
}