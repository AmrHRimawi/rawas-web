import React from "react";
import IconText from "@/components/IconText";
import {Link} from "@nextui-org/react";
import {navLinks, socials} from "@/utils/Constent";
import MotionEndDiv from "@/components/MotionEndDiv";
import Image from "next/image";

export default function AppFooter() {


    return (
        <section className="w-full flex flex-col justify-between items-center lg:items-start lg:h-lvh">
            <MotionEndDiv className=" px-12">
                <div className="bg-primary-foreground p-5 translate-y-28 shadow-2xl border-t-2 rounded-full">
                    <Image width={200} height={200} src="/imgs/rawas-logo.svg" alt="Rawas"/>
                </div>
            </MotionEndDiv>

            <div className="w-full flex flex-col justify-between items-center h-3/4 bg-primary text-primary-foreground px-12 pt-6">

                <div className="flex flex-col justify-between items-center lg:flex-row text-xl text-primary-foreground">
                    <div className="lg:w-5/12">
                        <div className="h-32"/>
                        <MotionEndDiv>
                            نسعى لتكون رواس الخيار الأول في الاستثمار والامتلاك والتطوير العقاري في فلسطين، وأن تصبح الرائدة في
                            استقطاب الطاقات البشرية الفلسطينية لتقدم أضخم منصة للتوعية في الاستثمار العقاري الفلسطيني
                        </MotionEndDiv>

                        <div className="h-4"/>
                        <MotionEndDiv className="text-secondary text-4xl  m-2 drop-shadow-xl adam-script-font">أينما حلت .. حياة</MotionEndDiv>
                        <div className="h-4"/>
                        <MotionEndDiv className="flex justify-center lg:justify-start text-secondary">
                            {
                                socials().map(social => (
                                    <Link className="pe-5 py-2 text-secondary" key={social.name} href={social.link}>{social.icon}</Link>
                                ))
                            }
                        </MotionEndDiv>
                    </div>

                    <div className="h-12"/>

                    {/* important links section */}
                    <div className="lg:w-1/5">
                        <MotionEndDiv><p className="text-3xl pb-3">روابط مهمة</p></MotionEndDiv>
                        <div className="h-4"/>
                        {navLinks.map((item, index) => (
                            <div key={`${item.name}-${index}`} className="flex">
                                <MotionEndDiv><Link className="w-full text-primary-foreground" href={item.link} size="lg">
                                    <p className="text-secondary pe-6 text-4xl">{">"}</p>
                                    <p>{item.name}</p>
                                </Link></MotionEndDiv>
                            </div>
                        ))}
                    </div>

                    <div className="h-12"/>

                    {/* contact us section */}
                    <div className="lg:w-1/3">
                        <MotionEndDiv><p className="text-3xl pb-3">معلومات رواس</p></MotionEndDiv>
                        <div className="flex flex-col justify-between items-start">
                            <MotionEndDiv>
                                <IconText icon="faMobileScreen" iconProps={{className: "text-secondary  text-xl"}}>0593330060</IconText>
                            </MotionEndDiv>
                            <MotionEndDiv>
                                <IconText icon="faMobileScreen" iconProps={{className: "text-secondary text-xl"}}>0593330066</IconText>
                            </MotionEndDiv>
                            <MotionEndDiv>
                                <IconText icon="faPhone" iconProps={{className: "text-secondary text-xl"}}>022422766</IconText>
                            </MotionEndDiv>
                            <MotionEndDiv>
                                <IconText icon="faMapLocationDot" iconProps={{className: "text-secondary text-2xl"}}>
                                    رام الله - البالوع - عمارة اسطنبول
                                </IconText>
                            </MotionEndDiv>
                            <div className="h-12"/>
                            <MotionEndDiv><p className="text-3xl pb-3">أوقات الدوام</p></MotionEndDiv>
                            <MotionEndDiv><p>السبت - الخميس (8:00ص -6:00م)</p></MotionEndDiv>
                            <MotionEndDiv><p>الجمعة عطلة رسمية</p></MotionEndDiv>

                        </div>
                    </div>

                </div>
                <div className="flex justify-center p-3 w-full border-t-1 mt-4">
                    <p>حقوق الطبع والنشر 2024 © جميع الحقوق محفوظة التصميم بواسطة رواس</p>
                </div>
            </div>

        </section>
    );

}
