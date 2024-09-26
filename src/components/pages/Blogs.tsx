import AppTitle from "@/components/AppTitle";
import AppTitle3 from "@/components/AppTitle3";
import {AppLineSep} from "@/components/AppLineSep";
import {pathPrefix} from "@/utils/Constent";
import Image from "next/image";
import Link from "next/link";
import MotionEndDiv from "@/components/MotionEndDiv";
import MotionUpDiv from "@/components/MotionUpDiv";

const Blogs = () => {
    const inNews = [
        {
            name: "الاقتصادي",
            logo: {src: `${pathPrefix}/images/blogs/news/aliqtisadi.png`, alt: "rand"},
            title: "شركة عقارية جديدة تدخل السوق المحلية",
            link: "https://www.aliqtisadi.ps/ar/Article/100246/%D8%B4%D8%B1%D9%83%D8%A9-%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%D8%A9-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-%D8%AA%D8%AF%D8%AE%D9%84-%D8%A7%D9%84%D8%B3%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%AD%D9%84%D9%8A%D8%A9"
        },
        {
            name: "أجيال",
            logo: {src: `${pathPrefix}/images/blogs/news/ajial.png`, alt: "ajial"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: "https://arn.ps/post/283316.html"
        },
        {
            name: "صدى نيوز",
            logo: {src: `${pathPrefix}/images/blogs/news/sada-business.png`, alt: "sada"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: "https://www.sadanews.ps/business/169335.html"
        },
        {
            name: "شبكة الحرية الإعلامية",
            logo: {src: `${pathPrefix}/images/blogs/news/shbaka-free.png`, alt: "shbaka-free"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: "https://hr.ps/news/190199"
        },
        {
            name: "راديو بيت لحم",
            logo: {src: `${pathPrefix}/images/blogs/news/radio-bait.png`, alt: "radio-bait"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: "https://www.rb2000.ps/news/454987.html"
        },
        {
            name: "تلفزيون البلد",
            logo: {src: `${pathPrefix}/images/blogs/news/tv-balad.png`, alt: "tv-balad"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: "https://albaladfm.ps/?p=19972"
        },
        {
            name: "وكالة المؤشر للأنباء",
            logo: {src: `${pathPrefix}/images/blogs/news/moasher.png`, alt: "moasher"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: "https://almoasher.ps/?p=5113"
        },
        {
            name: "شبكة راية الإعلامية",
            logo: {src: `${pathPrefix}/images/blogs/news/raya.png`, alt: "raya"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: "https://www.raya.ps/news/1175010.html"
        },
        {
            name: "رقييب",
            logo: {src: `${pathPrefix}/images/blogs/news/raqeeb.png`, alt: "raqeeb"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: "https://raqeeb.ps/7628.html"
        },
        {
            name: "رام الله مكس",
            logo: {src: `${pathPrefix}/images/blogs/news/ram-mix.png`, alt: "ram-mix"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: "https://rmix.ps/news/375909.html"
        },
        {
            name: "رام الله الاخباري",
            logo: {src: `${pathPrefix}/images/blogs/news/ram-ekhbari.png`, alt: "ram-ekhbari"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: "https://ramallah.news/post/238802/%D8%A5%D8%B7%D9%84%D8%A7%D9%82-%D8%A3%D8%B9%D9%85%D8%A7%D9%84-%D8%B4%D8%B1%D9%83%D8%A9-%D8%B1%D9%88%D8%A7%D8%B3-%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%AB%D9%85%D8%A7%D8%B1-%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A-%D9%81%D9%8A-%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86-%D8%A8%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9-%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%D8%A9-%D9%85%D8%AA%D9%86%D9%88%D8%B9%D8%A9"
        },
        {
            name: "Palestine News",
            logo: {src: `${pathPrefix}/images/blogs/news/palestine-news.png`, alt: "palestine-news"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: "https://palestine.shafaqna.com/AR/AL/8204464"
        },
    ];

    const inSocialMedia = [
        {
            name: "رام الله الاخباري - Ramallah News",
            logo: {src: `${pathPrefix}/images/blogs/socials/ram-news.png`, alt: "ram-news"},
            title: "بخبرة تمتد 20 عاما ... اطلاق شركة رواس العقارية في محافظة رام الله والبيرة",
            link: ""
        },
        {
            name: "شبكة وطن الاعلامية",
            logo: {src: `${pathPrefix}/images/blogs/socials/watan.png`, alt: "watan"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: ""
        },
        {
            name: "Shabab FM 101.4",
            logo: {src: `${pathPrefix}/images/blogs/socials/shabab.png`, alt: "shabab"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: ""
        },
        {
            name: "رابعة 88.7FM",
            logo: {src: `${pathPrefix}/images/blogs/socials/rabaa.png`, alt: "rabaa"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: ""
        },
        {
            name: "راديو بلدنا Radio Baladna",
            logo: {src: `${pathPrefix}/images/blogs/socials/baladna.png`, alt: "baladna"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: ""
        },
        {
            name: "رام الله مكس - Ramallah Mix",
            logo: {src: `${pathPrefix}/images/blogs/socials/ram-mix.png`, alt: "ram-mix"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: ""
        },
        {
            name: "أخبار راديو طريق المحبة",
            logo: {src: `${pathPrefix}/images/blogs/socials/tareeq.png`, alt: "tareeq"},
            title: "إطلاق أعمال شركة \"رواس\" للاستثمار العقاري في فلسطين بمشاريع عقارية متنوعة",
            link: ""
        },
    ];

    return (
        <div className="w-full p-6 lg:p-16">
            <div className="h-12"/>
            <AppTitle text="ـقالات وأخبار" prefix="مـ"/>
            <section>
                <div className="h-12"/>
                <AppTitle3 text="ذكرنا في المواقع الاخبارية:"></AppTitle3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 pt-12">
                    {inNews.map((news, index) => (
                        <MotionUpDiv key={"news-" + index}
                                     className={"flex flex-col justify-between items-end bg-white rounded-5xl shadow-lg mt-4" + ((index % 2 === 0) ? " rounded-br-sm" : " rounded-bl-sm")}>
                            <div className="flex flex-col items-center justify-center p-4 pt-0 w-full ">
                                <div className="relative -top-10 bg-background rounded-full shadow-xl w-20 h-20 flex justify-center items-center">
                                    <Image src={news.logo.src} alt={news.logo.alt} className="" width={60} height={40}/>
                                </div>
                                <div className="h-4"/>
                                <p>{news.title}</p>
                            </div>
                            <div className="me-6 mb-6  border-1 border-primary rounded-lg pt-1">
                                <Link href={news.link} target="_blank" rel="noreferrer" className="text-primary p-2">{"إقرأ المزيد ..."}</Link>
                            </div>
                        </MotionUpDiv>
                    ))}
                </div>
                <div className="h-36"/>
                <AppLineSep/>
            </section>
            <div className="h-12"/>
            <section>
                <div className="h-12"/>
                <AppTitle3 text="ذكرنا في مواقع التواصل الاجتماعي:"></AppTitle3>

                <div className="flex flex-col">
                    {inSocialMedia.map((news, index) => (
                        <MotionEndDiv key={"news-" + index} className={"flex flex-col lg:flex-row justify-between items-center bg-white rounded-full shadow-lg mt-10"}>
                            <div className="flex flex-col lg:flex-row items-center p-2">
                                <div className="relative -top-10 lg:top-0 lg:-right-10">
                                    <Image src={news.logo.src} alt={news.logo.alt} className="w-20 h-20" width={40} height={40}/>
                                </div>
                                <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-start px-2">
                                    <p className="text-primary font-bold">{news.name}</p>
                                    <p>{news.title}</p>
                                </div>
                            </div>
                            <div className="me-4 my-2 border-1 border-primary-50 rounded-full pt-1">
                                <Link href={news.link} target="_blank" rel="noreferrer" className="text-primary p-4">{"إقرأ المزيد ..."}</Link>
                            </div>
                        </MotionEndDiv>
                    ))}
                </div>

                <div className="h-36"/>
                <AppLineSep/>
            </section>
        </div>
    );
}

export default Blogs;