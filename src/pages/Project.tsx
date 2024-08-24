import React from "react";
import ImageSlider from "@/components/ImageSlider";
import Carousel from "@/components/Carousel";
import MotionUpDiv from "@/components/MotionUpDiv";
import AppTitle from "@/components/AppTitle";
import SourceIconText from "@/components/SourceIconText";
import {Button, Link} from "@nextui-org/react";
import {AppLineSep} from "@/components/AppLineSep";
import AppTitle3 from "@/components/AppTitle3";
import MotionEndDiv from "@/components/MotionEndDiv";

interface ProjectProps {
    id?: string
}

export default function Project({id}: ProjectProps) {
    const project = {
        id: 1,
        images: [
            {src: "/imgs/eng-imad.png"},
            {src: "/imgs/real-estate-web-banner.jpg"},
            {src: "/imgs/project-img.png"},
        ],
        properties: [
            {src: "/icons/office.svg", alt: "office", title: "نوع المشروع", text: "عمارة مكاتب"},
            {src: "/icons/office.svg", alt: "office", title: "الموقع", text: "مدينة رام الله حي الكرمل مقابل مبنى تلفزيون فلسطين برج مشعل"},
            {src: "/icons/office.svg", alt: "office", title: "المساحة الطابقية", text: "493 متر مربع"},
            {src: "/icons/office.svg", alt: "office", title: "عدد الطوابق", text: "9 طوابق . 6 طوابق متكررة التقسيم والطابق الارضي وطابقين مواقف"},
            {src: "/icons/office.svg", alt: "office", title: "عدد الوحدات المكتبية", text: "اربعين وحدة موزعة على ست وحدات في كل طابق من الاول لسادس واربع وحدات في الطابق الارضي"},
            {src: "/icons/office.svg", alt: "office", title: "مساحات المكاتب", text: "متنوعة تبدا من مساحة 66.4 متر مربع الى 116.6 متر مربع"},
        ],
        about: "يتميز المشروع ليس بكونه الاول كعمارة مكتبية في مدينة رام الله تسعى الشركة من خلاله لاستقطاب كافة المميزين والمستثمرين والمعنيين في القطاع العقاري بل بصفته بوابة تشمل كافة الراغبين بالاستثفادة من خبرة الشركة والمنتجاتها على المدى الطويل بحيث استطاعة الشركة ان تؤسس لمشروع يعد ايقونه للعمل المككتبي من حيث التميز باختيار الموقع واطلالاته وسهولة الوصول اليه من كافة مناطق رام الله والقدرة على تصميم عمارة مكتبية تتميز بالندرة والاطلالة على كافة مرافق البلد الحيوية لتشكل معلم ورمز تستطيع الشركة ان تقدم من خلاله نموذج واضح ومستدام لعملها وكيفية قدرتها على اختيار وتطويع التصميم ليخدم المساحة وفيكون بذلك اصبح عنوانا مميزا يخدم كافة المالكين والمستخدمين والمستاجرين من حيث المساحات المتنوعة واسعارا مميزة تخدم القدرة على الاستفادة من الاستثمار المبدئي بما لا يقل عن 20% كعائد استثماري من كافة المكاتب الموجودة في العمارة وكما تلتزم الشركة بتقديم حلول عملية وخطوات للتسليم بالموع وخدمة ما بعد البيع من خلال برامج متطورة وادوات وحلول تقدم لاول مرة في محافظة رام الله والبيرة من خلال المطورين العقاريين ليصبح المبنى اكثر قيمة وقدرة على التشغيل بعد التسليم.",

        lookImages: [{
            title: "first image",
            src: "/imgs/real-estate-web-banner.jpg",
        }, {
            title: "second image",
            src: "/imgs/project-img.png",
        }, {
            title: "third image",
            src: "/imgs/eng-imad.png",
        }, {
            title: "fourth image",
            src: "/imgs/real-estate-web-banner.jpg",
        }, {
            title: "fifth image",
            src: "/imgs/project-img.png",
        }, {
            title: "sixth image",
            src: "/imgs/eng-imad.png",
        }
        ]
    }
    const {images} = project;
    return (
        <section className="w-full p-6 lg:p-14">

            <MotionUpDiv><AppTitle text="واس جيت" prefix="ر"/></MotionUpDiv>
            <div className="h-24"/>

            <div className="flex flex-col justify-center items-center w-full">
                {/*<h1>Project Page {id}</h1>*/}
                {/*<h1>{data?.name}</h1>*/}
                {/*<p>{data?.description}</p>*/}

                <MotionUpDiv className="w-5/6" viewportAmount={0.2}><ImageSlider images={images}/></MotionUpDiv>
                <div className="h-12"/>


                <div className="w-5/6 flex flex-col justify-center items-start gap-1">
                    {project.properties.map((property, index) => (
                        <MotionEndDiv key={"i:" + index} className="flex justify-start items-start"><SourceIconText src={property.src} alt={property.alt}>
                            <span className="font-medium">{property.title}</span>: {property.text}
                        </SourceIconText></MotionEndDiv>
                    ))}

                </div>
                <div className="h-12"/>
                <MotionUpDiv className="w-5/6" viewportAmount={0.2}>
                    <h2 className="text-2xl font-medium bg-primary w-fit p-4 rounded-lg translate-y-8 -translate-x-12 text-primary-foreground">نبذه عن المشروع :</h2>
                    <p className="bg-foreground-100 rounded-2xl ps-14 pt-14 pb-8 pe-4">{project.about}</p>
                </MotionUpDiv>
                <div className="h-12"/>

                <MotionUpDiv className="w-full flex justify-center">
                    <Button href="/projects/1" as={Link} className="mt-5 p-6 lg:w-1/2 text-xl" color="primary">للاستفسار تواصل معنا</Button>
                </MotionUpDiv>
                <div className="h-12"/>

                <AppLineSep/>
                <div className="h-12"/>
                <AppTitle3 text="اطلالات المشروع"/>


                <div className="h-24"/>

                <MotionUpDiv className="flex justify-center items-center" viewportAmount={0.2}><Carousel images={project.lookImages}/></MotionUpDiv>
                <div className="h-24"/>

                <AppTitle3 text="موقع المشروع على الخريطة"/>
                <div className="h-8"/>
                <MotionUpDiv className="w-full" viewportAmount={0.2}>
                    <iframe title={"project location"}
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1902.868659040583!2d35.20212806400692!3d31.912098375793555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU0JzQzLjYiTiAzNcKwMTInMTAuNSJF!5e1!3m2!1sen!2suk!4v1724510930866!5m2!1sen!2suk"
                            width="100%" height="600" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </MotionUpDiv>

                <div className="h-12"/>
                <AppLineSep/>

            </div>

        </section>
    )
}