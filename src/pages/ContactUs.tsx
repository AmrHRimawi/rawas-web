import React from "react";
import "./AboutUs.css"
import AppTitle from "@/components/AppTitle";
import {Button, Input, Link, Textarea} from "@nextui-org/react";
import MotionUpDiv from "@/components/MotionUpDiv";
import SourceIconText from "@/components/SourceIconText";
import SourceIconLink from "@/components/SourceIconLink";

export default function ContactUs() {

    const socialsContact = [
        {
            name: "LinkedIn",
            src: "/icons/linkedin.svg",
            color: "#0077b5",
            link: "https://www.facebook.com"
        },
        {
            name: "Instagram",
            src: "/icons/instagram.svg",
            color: "#e4405f",
            link: "https://www.facebook.com"
        },
        {
            name: "WhatsApp",
            src: "/icons/whatsapp.svg",
            color: "#43a884",
            link: "https://www.facebook.com"
        },
        {
            name: "Messenger",
            src: "/icons/messenger.svg",
            color: "#0084ff",
            link: "https://www.facebook.com"
        },
    ];

    return (

        <section className="w-5/6">
            <div className="h-24"/>
            <MotionUpDiv><AppTitle text="اصل معنا" prefix="تو"/></MotionUpDiv>
            <br/>
            <div className="flex flex-col justify-center items-center">
                <MotionUpDiv className="lg:w-8/12 w-fit pt-4 pb-2 px-3 text-2xl flex flex-col lg:flex-row justify-evenly items-center bg-foreground-100 shadow-lg rounded-lg">
                    <Link href="tel:0593330060" className="text-2xl text-foreground">
                        <SourceIconText src="/icons/phone.svg" alt="phone">0593330060</SourceIconText>
                    </Link>
                    <Link href="tel:0593330066" className="text-2xl text-foreground">
                        <SourceIconText src="/icons/phone.svg" alt="phone">0593330060</SourceIconText>
                    </Link>
                    <Link href="tel:022422766" className="text-2xl text-foreground">
                        <SourceIconText src="/icons/phone.svg" alt="phone">022422766</SourceIconText>
                    </Link>
                </MotionUpDiv>

                <MotionUpDiv className="flex flex-col justify-center items-center text-center">
                    <div className="h-8"/>
                    <p>نسعى لتقديم تجربة مميزة وجديدة في قطاع العقار الفلسطيني</p>
                    <div className="h-4"/>
                    <p>ادخل بياناتك هنا ليتم التواصل معك بأقرب وقت</p>
                </MotionUpDiv>
                <div className="w-full lg:w-1/2 max-w-xl flex flex-col items-center">

                    <MotionUpDiv>
                        <Input type="text" className="mt-5" label="الاسم"/>
                    </MotionUpDiv>
                    <MotionUpDiv>
                        <Input type="text" className="mt-5" label="العائلة"/>
                    </MotionUpDiv>
                    <MotionUpDiv>
                        <Input type="email" className="mt-5" label="البريد الالكتروني"/>
                    </MotionUpDiv>
                    <MotionUpDiv>
                        <Input type="tel" className="mt-5" label="الهاتف المحمول"/>
                    </MotionUpDiv>
                    <MotionUpDiv>
                        <Textarea label="الملاحظات" className="mt-5"/>
                    </MotionUpDiv>
                    <MotionUpDiv>
                        <div className="h-4"/>
                    </MotionUpDiv>
                    <MotionUpDiv>
                        <Button className="mt-5 p-6 w-full text-xl" color="primary">إرسال</Button>
                    </MotionUpDiv>
                </div>

                <MotionUpDiv className="lg:w-1/2 max-w-xl flex flex-col items-center">
                    <div className="h-8"/>
                    <p>أو يمكنك التواصل معنا عبر منصاتنا الاجتماعية</p>
                    <div className="flex flex-wrap gap-8 mt-8 px-4">
                        {socialsContact.map(social => (
                            <SourceIconLink key={social.name} src={social.src} link={social.link} alt={social.name} color={social.color} inSize={30}
                                            outSize={60}/>

                        ))}
                    </div>
                    <div className="h-8"/>
                </MotionUpDiv>
            </div>

            <div className="h-12 w-full flex justify-center items-center">
                <div className="h-1 w-2/3 border-b-1 shadow-xl"/>
            </div>
        </section>
    )
}