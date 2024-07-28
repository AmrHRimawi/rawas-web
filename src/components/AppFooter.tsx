import React from "react";
import IconText from "@/components/IconText";
import Image from "next/image";
import {Link} from "@nextui-org/react";
import {socials} from "@/utils/Constent";
import MotionDiv from "@/components/MotionDiv";

export default function AppFooter() {


    return (<div className="w-full flex flex-col justify-between items-center h-lvh">
        <MotionDiv>
            <div className="bg-primary-foreground p-5 translate-y-28 shadow-2xl border-t-2 rounded-full">

                <Image width={200} height={200} src="/rawas-web/imgs/rawas-logo.svg" alt="Rawas"/>
            </div>
        </MotionDiv>
        <div className="w-full flex flex-col justify-center items-center h-3/4 bg-primary text-primary-foreground">
            <div className="w-4/5 lg:w-3/5  h-full flex flex-col justify-evenly items-center text-center">
                <div className="h-28 lg:h-12"></div>
                <MotionDiv><p>
                    نسعى لتكون رواس الخيار الأول في الاستثمار والامتلاك والتطوير العقاري في فلسطين، وأن تصبح الرائدة في
                    استقطاب الطاقات البشرية الفلسطينية لتقدم أضخم منصة للتوعية في الاستثمار العقاري الفلسطيني
                </p></MotionDiv>
                <MotionDiv>
                    <IconText icon="faMapLocationDot" iconProps={{className: "text-secondary text-2xl"}}>
                        رام الله - عين مصباح - مقابل برج الاذاعة
                    </IconText>
                </MotionDiv>
                <MotionDiv className="w-4/5 text-3xl flex flex-col lg:flex-row justify-between items-center">
                    <IconText icon="faMobileScreen" iconProps={{className: "text-secondary  text-2xl"}}>0593330060</IconText>
                    <IconText icon="faMobileScreen" iconProps={{className: "text-secondary text-2xl"}}>0593330066</IconText>
                    <IconText icon="faPhone" iconProps={{className: "text-secondary text-2xl"}}>022422766</IconText>
                </MotionDiv>
                <MotionDiv><p className="text-3xl">أوقات الدوام من السبت - الخميس</p></MotionDiv>

            </div>

            <MotionDiv className="flex justify-center lg:justify-end text-secondary w-11/12 border-t-1">
                {
                    socials().map(social => (
                        <Link className="ps-5 py-2 text-xl text-secondary" key={social.name} href={social.link}>{social.icon}</Link>
                    ))
                }
            </MotionDiv>
        </div>
    </div>);

}
