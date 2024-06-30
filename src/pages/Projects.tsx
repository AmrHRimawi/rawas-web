import React from "react";
import "./Projects.css"
import AppTitle from "@/components/AppTitle";

export default function Projects() {
    return (
        <div className="w-5/6">
            <div className="h-24"/>
            <AppTitle text="ـشاريعنا" prefix="مـ"/>
            <div className="h-24"/>

            <div className="flex flex-col lg:flex-row border-1 bg-foreground-50">
                <div className="projects-img w-full">
                    <div className="absolute translate-y-12">
                        <p className="bg-primary text-primary-foreground p-3 text-3xl w-fit ">مشروع رواس</p>
                        <p className="bg-secondary text-secondary-foreground text-2xl p-3 pe-6 me-4">رام الله - عين مصباح - مقابل برج الاذاعة</p>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly items-start p-12 text-2xl">

                    <p className="text-3xl font-bold">مشروع رواس</p>
                    <p>رام الله - عين مصباح - مقابل برج الاذاعة</p>
                    <div className="h-1 w-3/4 border-b-1 m-1 shadow-xl"/>
                    <p>موقف سيارات خاصة - مخازن خاصة - واجهات بانوراما
                        عزل ممتاز للعوامل الخارجية</p>
                    <div className="h-1 w-3/4 border-b-1 m-1 shadow-xl"/>
                    <p className="text-3xl font-bold">التفاصيل</p>
                    <p>7 طوابق</p>
                    <p>3 مداخل</p>
                    <p>مقسم الى 25 مكتب مع امكانية الدمج</p>
                    <p>مساحات متنوعة</p>
                </div>
            </div>
            <div className="h-24"/>

        </div>
    )
}