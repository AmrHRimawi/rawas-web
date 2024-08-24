import React from "react";
import AppTitle from "@/components/AppTitle";
import MotionUpDiv from "@/components/MotionUpDiv";
import {Button, Link} from "@nextui-org/react";
import Image from "next/image";

export default function Projects() {
    return (
        <section className="w-full p-6 lg:p-16">
            <div className="h-24"/>
            <MotionUpDiv><AppTitle text="ـشاريعنا" prefix="مـ"/></MotionUpDiv>
            <div className="h-24"/>

            {/*Project card*/}
            <div className="w-5/12">
                <MotionUpDiv viewportAmount={0.2}>
                    <div className="absolute translate-y-12">
                        <p className="bg-primary text-primary-foreground p-3 text-2xl lg:text-3xl w-fit ">مشروع رواس</p>
                        <p className="bg-secondary text-secondary-foreground text-xl lg:text-2xl p-3 pe-6 lg:me-4 w-2/3">رام الله، حي الكرمل مقابل مبنى تلفزيون فلسطين "برج
                            مشعل"</p>
                    </div>
                    <Image src="/imgs/real-estate-web-banner.jpg" alt="project image" width={550} height={520}/>
                </MotionUpDiv>

                <MotionUpDiv className="w-full flex justify-center">
                    <Button href="/projects/1" as={Link} className="mt-5 p-6 w-2/3 text-xl" color="primary">
                        لمشاهدة التفاصيل
                    </Button>
                </MotionUpDiv>
            </div>
            <div className="h-24"/>

        </section>
    )
}