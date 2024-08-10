import React from "react";
import "./AboutUs.css"
import AppTitle from "@/components/AppTitle";
import AppTitle2 from "@/components/AppTitle2";
import Image from "next/image";
import ArrowDown from "@/components/ArrowDown";

export default function AboutUs() {
    return (<div>

        <section className="about-us-header-section flex flex-col justify-end items-center p-10 lg:p-20">
            <div className="h-12 flex justify-center text-background drop-shadow-2xl">
                <ArrowDown/>
                <ArrowDown/>
            </div>
        </section>
        <div className="w-full p-6 lg:p-20">
            <section>
                <AppTitle text="ـذة عن رواس" prefix="نبـ"/>
                <div className="h-8"/>
                <AppTitle2 className="" text="رؤية رواس"/>
                <p className="w-2/3">
                    تتلخص رؤية الشركة بجزئين هو
                    ان تصبح رواس الخيار الاول لكل راغب في التملك او الاستثمار او التطوير في قطاع العقارات الفلسطيني
                    ان تجمع طاقات بشرية فلسطينية من ابناء شباب فلسطين في طواقمها ومستشاريها ومورديها لتصبح المنصة الاولى في الاستشارة والبحث
                    والتوعية المجتمعة في صناعة العقار السكني والمكتبي وتقدم حلول عقارية جديدة مميزة

                </p>

                {/*--------------------------------------*/}
                <div className="h-12"/>
                <div className="w-full flex justify-center items-center">
                    <div className="h-1 w-1/2 border-b-1 shadow-xl"/>
                </div>
                <div className="h-12"/>

                <AppTitle2 className="" text="رسالة المؤسس"/>
                <div>
                    <Image width={607} height={607} src="/imgs/eng-imad.png" alt="iamd"/>

                    <div className="h-80 sm:h-1"/>
                    <div className="relative flex justify-center items-center">
                        <div className="absolute z-0 w-full lg:w-9/12 h-96 border-8 rounded-2xl border-secondary shadow-xl"></div>

                        <div
                            className="absolute z-10 w-11/12 lg:w-8/12 min-h-72 border-1 rounded-2xl border-secondary bg-primary-foreground shadow-2xl px-2 lg:px-8 py-12 lg:py-16">
                            <div className="absolute -top-12 left-20 z-20 w-20 h-30 text-9xl text-primary">
                                <Image src="/icons/qoute-left.svg" alt="qoute-left" width={82} height={76}/>
                            </div>
                            <p>
                                رسالة الى الجمهور
                            </p>
                            <br/>
                            <p>
                                أسسنا شركة رواس للإستثمار العقاري بداية عام 2024 إنطلاقا من رؤية جديدة معتمدة على خبرتنا الممتدة لأكثر من 20 عام في القطاع العقاري، تدرجنا فيها
                                بكافة
                                مسؤوليات صناعة العقار في محافظة رام الله والبيرة مما شكل لدينا خبرة واسعة في القطاع العقاري وخلق لدينا
                                رغبة جامحة لمشاركة أحلام و أهداف أبناء شعبنا الطامحين في السكن والتملك والاستثمار, فكان لابد من تأسيس شركة رواس للاستثمار العقاري.
                            </p>
                            <p>
                                أهيمة مشاريعنا تنبع من خبرتنا و فهمنا بأن اختيار الموقع هو الميزة والركيزة الأساسية التي تبنى عليها مشاريعنا واستثماراتنا المستقبلية، وعندما نتحدث
                                عن
                                اختيار الموقع لا نقصد فقط المكان بل طبيعة الإطلالة والتضاريس المحيطة و المشاريع المجاورة و الأهداف المرجوة من المشروع و المرافق الحيوية ومساحة أرض
                                المشروع وأبعادها بما يعكس شكل المبنى وتفصيلاته الداخلية.
                            </p>
                            <p>
                                ومن خلال التزامات وقيود حديدية فرضناها على أنفسنا وعلى طواقمنا في شركة رواس متمثلة باختيار أفضل المواقع و منتجات بأعلى جودة ممكنة مع تسليم بالموعد
                                المحدد و خدمة ما بعد البيع .
                            </p>
                            <p>
                                نسعى لتكون رواس الخيار الأول في الاستثمار والامتلاك والتطوير العقاري في فلسطين، وأن تصبح الرائدة في استقطاب الطاقات البشرية الفلسطينية لتقدم أضخم
                                منصة
                                للتوعية في الاستثمار العقاري الفلسطيني.
                            </p>
                            <br/>
                            <p>
                                المهندس عماد الخطيب
                            </p>
                            <p></p>
                            <p>
                                مدير ومؤسس شركة رواس
                            </p>

                            <div className="absolute -bottom-12 right-12 z-30 w-20 h-30 text-9xl text-primary">
                                <Image src="/icons/qoute-right.svg" alt="qoute-right" width={82} height={76}/>
                            </div>
                        </div>

                    </div>
                </div>

                {/*--------------------------------------*/}
                <div className="h-96 sm:h-80"/>
                <div className="h-48 sm:h-0"/>
                <div className="h-12"/>
                <div className="w-full flex justify-center items-center">
                    <div className="h-1 w-1/2 border-b-1 shadow-xl"/>
                </div>
                <div className="h-12"/>


                <div className="h-40"/>
                <div className="relative flex flex-col lg:flex-row lg:justify-start items-center  ">
                    <div className="border-secondary border-x-8 border-b-8 lg:border-y-8 lg:border-s-8 lg:border-e-0 rounded-2xl p-8 w-10/12">
                        <div className="h-32 lg:h-0"/>
                        <AppTitle2 className="" text="رسالة رواس"/>
                        <div className="w-full lg:w-2/3">
                            <p>
                                نرى ان افضل رسالة تقدمها رواس من خلال مشاريعها على الارض والتي تصبح حياه للمواقع التي ترغب رواس بانشاء مشاريعها فيها ومن هنا جاءت رواس ...
                            </p>
                            <br/>
                            <div className="flex justify-center items-center text-secondary text-xl">
                                <p>
                                    اينما حلت.. حياه
                                </p>
                            </div>
                            <br/>
                            <p>
                                أهداف شركة رواس
                            </p>
                            <p>
                                اهدافنا واضحة وتتزايد مع مرور الوقت بعمق تجربتنا في صناعة العقار السكني والمكتبي والمشاريع الجديدة المقترحة
                            </p>
                            <p>
                                تتميز رواس بهدفها الاول وهو جمع الاستثمار في القدرات الفلسطينية الشابة لتشكل طاقم يؤدي دور الريادة في قطاع العقار الفلسطيني
                            </p>
                            <p>
                                وتسعى رواس من خلال هدفها الثاني الى ان تشارك افضل عملاء وزبائن فلسطين تجربة استثمارية في كافة مراحل الاستثمار ابتداء من الرغبة في الاستثمار حتى
                                الامتلاك
                                وان تقدم حلول حقيقية لخدمة ما بعد البيع في قطاع صناعة العقار الفلسطيني
                            </p>
                            <br/>
                            <p>
                                تلتزم رواس امام عملائها بتحقيق ما تلزم به نفسها وطاقمها من محدداتها الاربعة والتي تتلخص :
                            </p>
                            <br/>
                            <ol className="text-secondary">
                                <li><span>1. </span><span>اختيار افضل المواقع</span></li>
                                <li><span>2. </span><span>منتجات ذات جودة عالية</span></li>
                                <li><span>3. </span><span>التسليم في الموعد</span></li>
                                <li><span>4. </span><span>خدمة ما بعد البيع</span></li>
                            </ol>
                            <br/>
                            <p>
                                كما أن رواس تسعى لتحقيق هدف للمهتمين بالمعرفة والتوعية العقارية بحيث تسعى ان تكون المنصة الاولى في البحث والتوعية والاستشارة العقارية في فلسطين
                            </p>

                        </div>
                    </div>
                    <div className="absolute -top-32 lg:top-32  lg:-left-12 max-w-1/3">
                        <Image className="max-w-sm  lg:max-w-lg" width={600} height={600} src="/imgs/rawas-logo.svg" alt="Rawas"/>
                    </div>
                </div>

            </section>
        </div>
    </div>)
}