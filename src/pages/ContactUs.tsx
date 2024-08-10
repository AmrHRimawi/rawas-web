import React from "react";
import "./AboutUs.css"
import AppTitle from "@/components/AppTitle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, Input, Link, Textarea} from "@nextui-org/react";
import IconText from "@/components/IconText";
import {faFacebookMessenger, faLinkedin, faSquareInstagram, faSquareWhatsapp} from "@fortawesome/free-brands-svg-icons";
import MotionUpDiv from "@/components/MotionUpDiv";

export default function ContactUs() {

    const socialsContact = [
        {
            name: "LinkedIn",
            icon: <FontAwesomeIcon icon={faLinkedin} size="xl"/>,
            link: "https://www.facebook.com"
        },
        {
            name: "Instagram",
            icon: <FontAwesomeIcon icon={faSquareInstagram} size="xl"/>,
            link: "https://www.facebook.com"
        },
        {
            name: "WhatsApp",
            icon: <FontAwesomeIcon icon={faSquareWhatsapp} size="xl"/>,
            link: "https://www.facebook.com"
        },
        {
            name: "Messenger",
            icon: <FontAwesomeIcon icon={faFacebookMessenger} size="xl"/>,
            link: "https://www.facebook.com"
        },
    ];

    return (

        <div className="w-5/6">
            <div className="h-24"/>
            <MotionUpDiv><AppTitle text="اصل معنا" prefix="تو"/></MotionUpDiv>
            <br/>
            <div className="flex flex-col justify-center items-center">
                <MotionUpDiv className="lg:w-8/12 w-fit pt-4 pb-2 px-3 text-2xl flex flex-col lg:flex-row justify-evenly items-center bg-foreground-100 shadow-lg rounded-lg">
                    <Link href="tel:0593330060" className="text-2xl text-foreground">
                        <IconText icon="faMobileScreen" iconProps={{className: "text-secondary  text-2xl"}}>0593330060</IconText>
                    </Link>
                    <Link href="tel:0593330066" className="text-2xl text-foreground">
                        <IconText icon="faMobileScreen" iconProps={{className: "text-secondary text-2xl"}}>0593330066</IconText>
                    </Link>
                    <Link href="tel:022422766" className="text-2xl text-foreground">
                        <IconText icon="faPhone" iconProps={{className: "text-secondary text-2xl"}}>022422766</IconText>
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
                    <div className="flex flex-wrap  mt-8">
                        {socialsContact.map(social => (
                            <Link key={social.name} className="text-2xl px-4 lg:px-8 pb-4 text-secondary" href={social.link}>{social.icon}</Link>
                        ))}
                    </div>
                </MotionUpDiv>
            </div>

            <div className="h-12 w-full flex justify-center items-center">
                <div className="h-1 w-2/3 border-b-1 shadow-xl"/>
            </div>
        </div>
    )
}