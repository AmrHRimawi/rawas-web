import {Button, Link} from "@nextui-org/react";
import {CalendarBoldIcon} from "@nextui-org/shared-icons";
import "./Home.css";
import React from "react";
import ContactUs from "@/components/pages/ContactUs";
import Projects from "@/components/pages/Projects";
import ArrowDown from "@/components/ArrowDown";
import MotionUpDiv from "@/components/MotionUpDiv";
import TypeWriter from "@/components/TypeWriter";
import {pathPrefix} from "@/utils/Constent";
import TypeWriterList from "@/components/pages/TypeWriterList";

export default function Home() {


    return (<div>
        <section className="header-section flex flex-col justify-between items-end p-10 lg:p-20">

            <Button className="w-full lg:w-72 text-xl shadow-xl mt-32 lg:mt-1" color="primary" endContent={<CalendarBoldIcon/>} href="https://calendly.com/jrawas2024/30min"
                    as={Link}>
                احجز موعد ألأن
            </Button>

            <div/>
            <div className="flex flex-col items-center w-3/4 md:w-1/2">
                <div className="w-full flex justify-end">
                    <MotionUpDiv className="text-white bg-secondary text-xl md:text-2xl lg:text-3xl pt-2  drop-shadow-xl">
                        <TypeWriterList startDelay={5500} strings={[
                            'الكفاءة والاختصاص',
                            'الامانة والتجرد',
                            'الشفافية',
                            'الاستدامة والابتكار',
                            'التكيف لتبلبة رغبة العملاء',
                            'التوعية والثقافة',
                            'العمل المجتمعي',
                        ]}/></MotionUpDiv>
                </div>
                <MotionUpDiv className="text-white text-5xl md:text-7xl lg:text-9xl font-bold m-1  drop-shadow-xl"><TypeWriter>رواس</TypeWriter></MotionUpDiv>
                <div className="flex flex-col items-center relative w-full">
                    <MotionUpDiv className="text-white text-4xl md:text-6xl lg:text-8xl m-1 drop-shadow-xl adam-script-font absolute top-0">
                        <TypeWriter startDelay={2000}>أينما حلّت.. حياة</TypeWriter>
                    </MotionUpDiv>
                    <MotionUpDiv className="w-full h-4 bg-secondary text-secondary drop-shadow-xl absolute top-6 md:top-10 lg:top-16 -z-10">--</MotionUpDiv>
                </div>
            </div>

            <div className="w-full h-12 flex justify-center text-background drop-shadow-2xl">
                <ArrowDown/>
                <ArrowDown/>
            </div>
        </section>

        <section className="w-full flex flex-col justify-center items-center">


            <Projects/>
            <div className="border-b-secondary border-1 w-2/3 m-auto"/>

            <Button href={pathPrefix + "/projects"} as={Link} className="my-5 p-6 lg:w-1/4 lg:text-xl" color="primary">
                لمشاهدة المزيد
            </Button>

        </section>

        <section className="w-full flex flex-col justify-center items-center">
            <ContactUs/>
        </section>
    </div>);
}