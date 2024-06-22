import {Button, Input, Link, Textarea} from "@nextui-org/react";
import {CalendarBoldIcon} from "@nextui-org/shared-icons";
import "./Home.css";
import AppTitle from "@/components/AppTitle";
import IconText from "@/components/IconText";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookMessenger, faLinkedin, faSquareInstagram, faSquareWhatsapp} from "@fortawesome/free-brands-svg-icons";

export default function Home() {


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

    return (<div>
        <div className="header-section flex flex-col justify-around items-end p-10 lg:p-20">

            <Button className="w-full lg:w-72 text-xl" color="primary" endContent={<CalendarBoldIcon/>}>
                احجز موعد ألأن
            </Button>
            <div className="text flex flex-col items-center ">
                <h1 className=" text-white text-5xl lg:text-9xl font-bold m-1 ">رواس</h1>
                <h3 className="text-white text-4xl lg:text-8xl m-1">أينما حلت حياه</h3>
            </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-5/6">
                <AppTitle others="ـشاريعنا" first="مـ"/>
                <br/>
                <h1>ت نتفق عليهن</h1>
            </div>

            <div className="h-24"/>

            <div className="w-5/6">
                <AppTitle others="اصل معنا" first="تو"/>
                <br/>
                <div className="flex flex-col justify-center items-center">
                    <div className="lg:w-4/5 max-w-6xl pt-2 px-3 text-3xl flex flex-col lg:flex-row justify-evenly items-center bg-foreground-100 shadow-sm rounded-lg">
                        <Link href="tel:0593330060" className="text-3xl text-foreground">
                            <IconText icon="faMobileScreen" iconProps={{className: "text-secondary  text-2xl"}}>0593330060</IconText>
                        </Link>
                        <Link href="tel:0593330066" className="text-3xl text-foreground">
                            <IconText icon="faMobileScreen" iconProps={{className: "text-secondary text-2xl"}}>0593330066</IconText>
                        </Link>
                        <Link href="tel:022422766" className="text-3xl text-foreground">
                            <IconText icon="faPhone" iconProps={{className: "text-secondary text-2xl"}}>022422766</IconText>
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center">
                        <div className="h-8"/>
                        <p>نسعى لتقديم تجربة مميزة وجديدة في قطاع العقار الفلسطيني</p>
                        <div className="h-4"/>
                        <p>ادخل بياناتك هنا ليتم التواصل معك بأقرب وقت</p>
                    </div>
                    <div className="lg:w-1/2 max-w-xl flex flex-col items-center">
                        <Input type="text" className="mt-5" label="الاسم"/>
                        <Input type="text" className="mt-5" label="العائلة"/>
                        <Input type="email" className="mt-5" label="البريد الالكتروني"/>
                        <Input type="tel" className="mt-5" label="الهاتف المحمول"/>
                        <Textarea label="الملاحظات" className="mt-5"/>
                        <div className="h-4"/>
                        <Button className="mt-5 w-full text-xl" color="primary">إرسال</Button>
                        <div className="h-8"/>
                        <p>أو يمكنك التواصل معنا عبر منصاتنا الاجتماعية</p>
                        <div className="flex flex-wrap border-b-2 border-primary mt-3">
                            {socialsContact.map(social => (
                                <Link key={social.name} className="px-8 pb-4 text-secondary" href={social.link}>{social.icon}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}