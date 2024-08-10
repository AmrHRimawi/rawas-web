import {Button, Link} from "@nextui-org/react";
import {CalendarBoldIcon} from "@nextui-org/shared-icons";
import "./Home.css";
import React from "react";
import ContactUs from "@/pages/ContactUs";
import Projects from "@/pages/Projects";
import ArrowDown from "@/components/ArrowDown";
import MotionUpDiv from "@/components/MotionUpDiv";

export default function Home() {


    return (<div>
        <div className="header-section flex flex-col justify-between items-end p-10 lg:p-20">

            <Button className="w-full lg:w-72 text-xl shadow-xl mt-32 lg:mt-1" color="primary" endContent={<CalendarBoldIcon/>}>
                احجز موعد ألأن
            </Button>
            <div/>
            <div className="text flex flex-col items-center ">
                <MotionUpDiv className=" text-white text-5xl md:text-7xl lg:text-9xl font-bold m-1  drop-shadow-xl">رواس</MotionUpDiv>
                <MotionUpDiv className="text-white text-4xl md:text-6xl lg:text-8xl m-1 drop-shadow-xl adam-script-font">أينما حلت .. حياة</MotionUpDiv>
            </div>
            <div className="w-full h-12 flex justify-center text-background drop-shadow-2xl">
                <ArrowDown/>
                <ArrowDown/>
            </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center">

            <Projects/>

            <Button href="/projects" as={Link} className="mt-5 p-6 w-1/4 text-xl" color="primary">
                لمشاهدة المزيد
            </Button>

            <ContactUs/>
        </div>
    </div>);
}