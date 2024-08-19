import React from "react";
import "./AboutUs.css";
import AppTitle from "@/components/AppTitle";
import AppTitle2 from "@/components/AppTitle2";
import Image from "next/image";
import ArrowDown from "@/components/ArrowDown";
import {AppLineSep} from "@/components/AppLineSep";
import MotionUpDiv from "@/components/MotionUpDiv";

export default function AboutUs() {
    const rawasWorkPillars = [
        " اختيار الموقع من حيث المكان والاطلالة والمساحة والتوزيع الوظيفي بما يعكس مباني مليئة بالحياة متفردة بالشكل والمضمون.",
        "اعلى انواع الجودة والتي تكمن في التفاصيل الوظيفية والمواد المستخدمة والفهم العميق والدراسة التحليلية للاستخدام العقاري.",
        " خدمة ما بعد البيع من الركائز التي تسعى الشركة لتحقيق فارق ومنافس في خدماتها في هذه المرحلة.",
        "التسليم في الموعد من الركائز التي تسعى الشركة الالتزام بها وبالجدول الزمني للتنفيذ.",
    ];

    const rawasValues = [
        {
            title: "الكفاءة والاختصاص",
            text: "تسعى شركة رواس الى تقديم كافة الحلول الخاصة في المجالات المختصة بكفاءة من خلال استقطاب طواقم فلسطينية مختصة بكافة المجالات التي تخص قطاع الاستثمار العقاري سواءا في الهندسة والتصميم او الانشاء او العمل الاداري في المبيعات والتسويق او المجال القانوني الخاص بالعقود الامتلاك والتملك."
        },
        {
            title: "الامانة والتجرد",
            text: "يضم هذا المبدئ الجوهر الاساسي للاتقان في اعمال الشركة بحيث تعطي الامور كما هي بحقها وبمهنية تنبع من واقع يحافظ على الحقوق والواجبات لكافة العاملين والزبائن والمستثمرين"
        },
        {
            title: "الشفافية",
            text: "تسعى الشركة لتقديم نموذج للاستثمار العقاري يعكس المعنى الحقيقي للقدرة العقارية في فلسطين ولتقديم ارقام واسعار تعكس الفائدة من الاسثمار العقاري"
        },
        {
            title: "الاستدامة والابتكار",
            text: "نحن نؤمن بدمج عروض المنتجات والتقنيات والأفكار الجديدة والمبتكرة والتأكد من أن منتجاتنا وخدماتنا تنافسية ومفيدة للعملاء والشركة. نحن نؤمن بالنمو والتنمية المستدامين، ليس فقط لصالح الشركة ولكن أيضًا لموظفينا وبيئتنا"
        },
        {
            title: "التكيف لتبلبة رغبة العملاء",
            text: "تؤمن الشركة باشراك الزبائن في الصفة الوظيفيه لتصميم المبنى المخصص للعمل التجاري والسكني وتطويع هذه المتطلبات وتقديمها في منتجات الشركة من خلال دراسات تسويقيه واستبيانات لبعض المشاكل التي تواجه الاستخدام للعقار حسب الوظيفة المطلوبة والشراكة والتعاون مع كافة المؤسسات والشركات والمنظمات التي تسعى لتحقيق بيئة وظيفيه افضل"
        },
        {
            title: "التوعية والثقافة",
            text: "تكرس الشركة جهودها لتقديم كافة المعلومات والادوات اللازمة لزيادة الوعي بالاستثمار العقاري في السوق الفلسطيني بما يخدم كافة الجهات المعنية وتقديم ودعم قنوات توعوية شابة تعمل على ترسيخ فكرة الاستثمار العقاري الصحيح"
        },
        {
            title: "العمل المجتمعي",
            text: "تؤمن الشركة بضوررة اشتراكها وتقديمها لكافة المساعدات والاشتراك بكافة الفعاليات المجتمعة كدور اساسي في الريادة وتقديم نموذج عالي من الاستثمار والتطوير لكافة طبقات المجتمع الفلسطيني"
        },
    ];

    return (
        <div>
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
                    <MotionUpDiv viewportAmount={0.2}>
                        <p className="w-full">
                            تاسست شركة رواس وهي شركة فلسطينية تعنى في قطاع صناعة العقار في عام 2024 وهي شركة مساهمة خصوصية بجهود وتطلعات ورؤية المؤسسين لخلق مفهوم جديد في صناعة
                            العقار
                            الفلسطيني في مدينة رام الله والبيرة وعموم الضفة الغربية مقر الشركة المؤقت في مدينة البيرة البالوع شاررع بلازا مول عمارة اسطنبول الطابق الثالث والموقع
                            الدائم
                            عمارة رواس جيت الطابق السادس حي الكرمل مقابل تلفزيون فلسطين برج مشعل في اول مشاريع شركة رواس في رام الله الاستثمارية
                        </p>
                    </MotionUpDiv>


                    {/*-----------------------------*/}
                    {/* company founders */}
                    <div className="h-32"/>
                    <AppTitle2 className="" text="رسالة المؤسسين"/>
                    <div className="min-h-72 h-fit">
                        <div className="flex justify-center mt-10 text-2xl">
                            <MotionUpDiv className="flex flex-col items-center">
                                <Image className="border-5 border-primary rounded-full" width={240} height={240} src="/imgs/eng-imad.png" alt="iamd"/>
                                <div className="m-3">المهندس عماد الخطيب</div>
                            </MotionUpDiv>
                            <div className="w-10 h10"/>
                            <MotionUpDiv className="flex flex-col items-center">
                                <Image className="border-5 border-primary rounded-full" width={240} height={240} src="/imgs/eng-imad.png" alt="iamd"/>
                                <div className="m-3">الحاج عبد الحافظ الخطيب</div>
                            </MotionUpDiv>
                        </div>

                        <div className="h-8"/>

                        <MotionUpDiv viewportAmount={0.2} className="relative">
                            <div className="relative flex justify-center items-center">
                                <div className="absolute z-0 w-full lg:w-[71%] h-5/6 border-10 rounded-4xl border-secondary "></div>
                                <div
                                    className="relative z-10 w-11/12 lg:w-8/12 min-h-72 border-1 rounded-4xl border-secondary bg-primary-foreground drop-shadow-xl px-2 lg:px-8 py-12 lg:py-16">
                                    <div className="absolute -top-12 left-20 z-20 w-20 h-30">
                                        <Image src="/icons/qoute-left.svg" alt="qoute-left" width={82} height={76}/>
                                    </div>
                                    <p>
                                        أسسنا شركة رواس للإستثمار العقاري بداية عام 2024 إنطلاقا من رؤية جديدة معتمدة على خبرتنا الممتدة لأكثر من 20 عام في القطاع العقاري، تدرجنا
                                        فيها
                                        بكافة مسؤوليات صناعة العقار في محافظة رام الله والبيرة مما شكل لدينا خبرة واسعة وخلق لدينا رغبة جامحة لمشاركة أحلام وأهداف أبناء شعبنا
                                        الطامحين
                                        في السكن والتملك والاستثمار, فكان لابد من تأسيس شركة رواس للاستثمار العقاري.
                                    </p>
                                    <div className="h-1"/>
                                    <p>
                                        أهمية مشاريعنا تنبع من خبرتنا وفهمنا بأن اختيار الموقع هو الميزة
                                        والركيزة الأساسية التي تبنى عليها مشاريعنا واستثماراتنا المستقبلية، وعندما نتحدث عن اختيار الموقع لا نقصد فقط المكان بل طبيعة الإطلالة
                                        والتضاريس
                                        المحيطة والمشاريع المجاورة والأهداف المرجوة من المشروع والمرافق الحيوية ومساحة أرض المشروع وأبعادها بما يعكس شكل المبنى وتفصيلاته الداخلية.
                                    </p>
                                    <div className="h-1"/>
                                    <p>
                                        ومن خلال التزامات وقيود حديدية فرضناها على أنفسنا وعلى طواقمنا في شركة رواس متمثلة باختيار أفضل المواقع ومنتجات بأعلى جودة ممكنة وتسليم
                                        بالموعد
                                        المحدد وخدمة ما بعد البيع.
                                    </p>
                                    <div className="h-1"/>
                                    <p>
                                        نسعى لتكون رواس الخيار الأول في الاستثمار والامتلاك والتطوير العقاري في فلسطين، وأن تصبح الرائدة في استقطاب الطاقات
                                        البشرية الفلسطينية لتقدم أضخم منصة للتوعية في الاستثمار العقاري الفلسطيني.
                                    </p>
                                    <div className="absolute -bottom-12 right-12 z-30 w-20 h-30">
                                        <Image src="/icons/qoute-right.svg" alt="qoute-right" width={82} height={76}/>
                                    </div>
                                </div>
                            </div>
                        </MotionUpDiv>
                    </div>

                    {/*-----------------------------*/}
                    {/* company vision */}
                    <div className="h-32"/>
                    <AppTitle2 className="" text="رؤية رواس"/>
                    <div className="h-12"/>

                    <MotionUpDiv viewportAmount={0.2}>
                        <div className="flex justify-center w-full">
                            <p className="w-10/12 bg-primary text-primary-foreground p-16 rounded-es-6xl rounded-se-6xl lg:ps-24 lg:rounded-es-full lg:rounded-se-full">
                                تبني شركة رواس من خلال احتكاكها في رياديي وطاقات المجتمع الفلسطيني قاعدة اساسية في الريادة لتكون الخيار الاول للاستثمار العقاري في فلسطين بصفتها
                                المهنية
                                والوظيفية والطلب الاول لكل باحث عن تطوير عقاري لمنشئته وظيفيا ومعماريا كما وتسعى لبناء منصة توعوية خاصة بامتلاك واستثمار العقار في فلسطين
                            </p>
                        </div>
                    </MotionUpDiv>

                    {/*-----------------------------*/}
                    {/* company message and goals */}
                    <div className="h-32"/>
                    <MotionUpDiv><AppTitle2 className="" text="رسالة الشركة وأهدافها"/></MotionUpDiv>
                    <div className="h-12"/>
                    <MotionUpDiv viewportAmount={0.2}>
                        <div className="relative">
                            <div className="relative flex justify-center items-center">
                                <div className="absolute z-0 w-full lg:w-[71%] h-5/6 border-10 rounded-4xl border-secondary "></div>
                                <div
                                    className="relative z-10 w-11/12 lg:w-8/12 min-h-72 border-1 rounded-4xl border-secondary bg-primary-foreground drop-shadow-xl px-2 lg:px-8 py-12 lg:py-16">
                                    <div className="absolute -top-12 left-20 z-20 w-20 h-30">
                                        <Image src="/icons/qoute-left.svg" alt="qoute-left" width={82} height={76}/>
                                    </div>
                                    <p className="text-secondary">رسالة الشركة</p>
                                    <br/>
                                    <p>
                                        تسعى شركة رواس من خلال اختيارها لمواقع مشاريعها ان تبعث الحياة في المناطق التي تؤسس لاستثمارها فيها لكي تغدو المنطقة اكثر قيمة وحياه وتشغيل
                                        ومن
                                        هنا
                                        جاءت رواس
                                    </p>
                                    <br/>
                                    <div className="flex justify-center items-center text-secondary text-3xl adam-script-font">
                                        <p>أينما حلّت.. حياة</p>
                                    </div>
                                    <br/>
                                    <p className="text-secondary">أهداف الشركة</p>
                                    <br/>
                                    <p>تهدف الشركة لتحقيق عدة اهداف وركائز في قطاع العقار الفلسطيني</p>
                                    <br/>
                                    <ul className="list-disc ps-5 my-2">
                                        <li>ان تصبح الشركة الواجهة الرئيسية لاستقطاب الطاقات الريادية الشابة الراغبة بالتميز في العمل بالقطاع العقاري في فلسطين لتحقق
                                            الريادة والتفرد في
                                            مشاريعها الخاصة والمشتركة.
                                        </li>
                                        <li>تسعى لتقديم حلول تطويرية لمشاريع عقارية جديدة وافكار مميزة وتصميمات مبتكرة في قطاع العقاري الفلسطيني.</li>
                                        <li>ان يعيش العملاء تجربة امتلاك واستثمار عقارية مميزة في جميع مراحلها وخاصة مرحلة ما بعد البيع.</li>
                                        <li>ان تصبح رواس منصة توعوية ومقصد لكل راغب للمعرفة والاستشارة بما يخص القطاع العقاري الفلسطيني.</li>
                                    </ul>
                                    <br/>
                                    <div className="absolute -bottom-12 right-12 z-30 w-20 h-30">
                                        <Image src="/icons/qoute-right.svg" alt="qoute-right" width={82} height={76}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MotionUpDiv>

                    {/*-----------------------------*/}
                    {/* work pillars */}
                    <div className="h-32"/>
                    <MotionUpDiv>
                        <AppTitle2 className="" text="ركائز العمل لدى شركة رواس"/>
                        <p>تسعى الى تحقيق اهدافنا من التزامنا العميق بركائز الشركة الاربعة</p>
                    </MotionUpDiv>
                    <div className="h-12"/>
                    <div>
                        <div className="w-full flex flex-wrap justify-around">
                            {rawasWorkPillars.map((pillar, i) => (
                                <MotionUpDiv key={i} className="bg-primary-foreground rounded-4xl pt-4 text-primary-foreground leading-tight">
                                    <div className="relative bg-primary rounded-full px-8 py-14 text-center w-72 h-72 flex items-center justify-center">
                                        <div className="absolute -top-1.5 right-3.5 bg-secondary rounded-full w-21 h-21 flex items-center justify-center">
                                            <p className="text-secondary-foreground text-4xl font-bold mt-2">{i + 1}</p>
                                        </div>
                                        {pillar}
                                    </div>
                                </MotionUpDiv>
                            ))}
                        </div>
                    </div>

                    {/*-----------------------------*/}
                    {/* company values */}
                    <div className="h-32"/>
                    <MotionUpDiv>
                        <AppTitle2 className="" text="الممارسات والقيم لدى شركة رواس"/>
                        <p>نحن نقدم أعلى مستوى من خدمة العملاء بشفافية ونزاهة كاملة بفريق من المختصين الاكفاء وتتلخص هذه القيم</p>
                    </MotionUpDiv>
                    <div className="h-16"/>
                    <div className="w-full flex flex-wrap justify-around">
                        {rawasValues.map((value, i) => (
                            <MotionUpDiv key={i} viewportAmount={0.5} className="relative bg-primary-foreground rounded-4xl p-4 mb-12 max-w-124">
                                <div
                                    className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background border-5 border-secondary rounded-full w-24 h-24 flex items-center justify-center">
                                    <p className="text-secondary text-4xl font-bold">{i + 1}</p>
                                </div>
                                <div className="text-center border-5 border-secondary rounded-6xl h-full min-h-120 px-8 pt-14 pb-2">
                                    <p className="text-primary font-bold">{value.title}</p>
                                    <p className="text-primary mt-2">{value.text}</p>
                                </div>
                            </MotionUpDiv>
                        ))}
                    </div>

                    <AppLineSep/>

                </section>
            </div>
        </div>
    );
}