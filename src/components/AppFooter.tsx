import React from "react";
import {Link} from "@nextui-org/react";
import {navLinks, pathPrefix, secondary, socials} from "@/utils/Constent";
import MotionEndDiv from "@/components/MotionEndDiv";
import Image from "next/image";
import SourceIconLink from "@/components/SourceIconLink";
import SourceIconText from "@/components/SourceIconText";

export default function AppFooter() {


    return (
        <section className="w-full flex flex-col justify-between items-center lg:items-start lg:h-lvh">
            <MotionEndDiv className=" px-12">
                <div className="bg-primary-foreground p-5 translate-y-28 shadow-2xl border-t-2 rounded-full">
                    <Image width={200} height={200} src={pathPrefix + "/images/rawas-logo.svg"} alt="Rawas"/>
                </div>
            </MotionEndDiv>

            <div className="w-full flex flex-col justify-between items-center h-4/5 bg-primary text-primary-foreground px-12 pt-6">

                <div className="flex flex-col justify-between items-center lg:items-start lg:flex-row text-xl text-primary-foreground">
                    <div className="lg:w-4/12">
                        <div className="h-32 "/>
                        <MotionEndDiv className="font-light">
                            نسعى لتكون رواس الخيار الأول في الاستثمار والامتلاك والتطوير العقاري في فلسطين، وأن تصبح الرائدة في
                            استقطاب الطاقات البشرية الفلسطينية لتقدم أضخم منصة للتوعية في الاستثمار العقاري الفلسطيني
                        </MotionEndDiv>

                        <div className="h-4"/>
                        <MotionEndDiv className="text-secondary text-4xl  m-2 drop-shadow-xl adam-script-font">أينما حلّت.. حياة</MotionEndDiv>
                        <div className="h-4"/>
                        <MotionEndDiv className="flex justify-center lg:justify-start text-secondary">
                            {
                                socials().map(social => (
                                    <SourceIconLink className="me-2" key={social.name} src={social.src} link={social.link} alt={social.name} color={secondary[300]}/>
                                ))
                            }
                        </MotionEndDiv>
                    </div>

                    <div className="h-12 lg:w-1/12"/>

                    {/* important links section */}
                    <div className="lg:w-2/12 flex flex-col gap-2">
                        <div className="h-16"/>
                        <MotionEndDiv><p className="text-2xl pb-3">روابط مهمة</p></MotionEndDiv>

                        {navLinks.map((item, index) => (
                            <div key={`${item.name}-${index}`} className="flex">
                                <MotionEndDiv><Link className="text-primary-foreground" href={item.link}>
                                    <SourceIconText src={pathPrefix + "/icons/left-angle.svg"} alt={item.name} size={12}>{item.name}</SourceIconText>
                                </Link></MotionEndDiv>
                            </div>
                        ))}
                    </div>

                    <div className="h-12 lg:w-1/12"/>

                    {/* contact us section */}
                    <div className="lg:w-4/12 flex flex-col gap-2">
                        <div className="h-16"/>
                        <MotionEndDiv><p className="text-2xl pb-3">معلومات رواس</p></MotionEndDiv>
                        <div className="flex flex-col justify-between items-start h-full gap-3">
                            <MotionEndDiv>
                                <SourceIconText src={pathPrefix + "/icons/phone.svg"} alt="phone">0593330060</SourceIconText>
                            </MotionEndDiv>
                            <MotionEndDiv>
                                <SourceIconText src={pathPrefix + "/icons/phone.svg"} alt="phone">0593330066</SourceIconText>
                            </MotionEndDiv>
                            <MotionEndDiv>
                                <SourceIconText src={pathPrefix + "/icons/rotary-telphone.svg"} alt="phone">022422766</SourceIconText>
                            </MotionEndDiv>
                            <MotionEndDiv>
                                <SourceIconText src={pathPrefix + "/icons/mail.svg"} alt="mail">info@rawas.ps</SourceIconText>
                            </MotionEndDiv>
                            <MotionEndDiv>
                                <SourceIconText src={pathPrefix + "/icons/map-pin.svg"} alt="map pin">رام الله، البيرة، البالوع،عمارة اسطنبول،ط3</SourceIconText>
                            </MotionEndDiv>
                            <div className="h-2"/>
                            <MotionEndDiv><p className="text-2xl pb-3">أوقات الدوام</p></MotionEndDiv>
                            <MotionEndDiv><p>السبت - الخميس (8:00ص -6:00م)</p></MotionEndDiv>
                            <MotionEndDiv><p>الجمعة عطلة رسمية</p></MotionEndDiv>

                        </div>
                    </div>

                </div>
                <div className="flex justify-start p-3 w-full border-t-1 mt-4">
                    <p>حقوق الطبع والنشر 2024 © جميع الحقوق محفوظة التصميم بواسطة رواس</p>
                </div>
            </div>

        </section>
    );

}
