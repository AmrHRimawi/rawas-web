import { pathPrefix } from "@/utils/Constent";

import { ProjectLight } from "@/model/project/Project";



export const projects = [
  {
    id: "1",
    name: "واس جيت",
    location: "رام الله، حي الكرمل مقابل مبنى تلفزيون فلسطين برج مشعل",
    bannerImage: `${pathPrefix}/images/real-estate-web-banner.jpeg`,
    images: [
        {src: `${pathPrefix}/images/project-1/pic/1.jpeg`},
        {src: `${pathPrefix}/images/project-1/pic/2.jpeg`},
        {src: `${pathPrefix}/images/project-1/pic/3.jpeg`},
        {src: `${pathPrefix}/images/project-1/pic/4.jpeg`},
        {src: `${pathPrefix}/images/project-1/pic/5.jpeg`},
        {src: `${pathPrefix}/images/project-1/pic/m.jpeg`},
    ],
    properties: [
        {src: `${pathPrefix}/icons/office.svg`, alt: "office", title: "نوع المشروع", text: "عمارة مكاتب"},
        {src: `${pathPrefix}/icons/office.svg`, alt: "office", title: "الموقع", text: "مدينة رام الله حي الكرمل مقابل مبنى تلفزيون فلسطين برج مشعل"},
        {src: `${pathPrefix}/icons/office.svg`, alt: "office", title: "المساحة الطابقية", text: "493 متر مربع"},
        {src: `${pathPrefix}/icons/office.svg`, alt: "office", title: "عدد الطوابق", text: "9 طوابق . 6 طوابق متكررة التقسيم والطابق ألأرضي وطابقين مواقف"},
        {
            src: `${pathPrefix}/icons/office.svg`,
            alt: "office",
            title: "عدد الوحدات المكتبية",
            text: "أربعين وحدة موزعة على ست وحدات في كل طابق من الاول لسادس واربع وحدات في الطابق الارضي"
        },
        {src: `${pathPrefix}/icons/office.svg`, alt: "office", title: "مساحات المكاتب", text: "متنوعة تبدأ من مساحة 66.4 متر مربع الى 116.6 متر مربع"},
    ],
    about: "يتميز المشروع ليس بكونه الأول كعمارة مكتبية في مدينة رام الله تسعى الشركة من خلاله لاستقطاب كافة المميزين والمستثمرين والمعنيين في القطاع العقاري بل بصفته بوابة تشمل كافة الراغبين بالاستفادة من خبرة الشركة ومنتجاتها على المدى الطويل بحيث استطاعة الشركة ان تؤسس لمشروع يعد أيقونة للعمل المكتبي من حيث التميز باختيار الموقع وإطلالاته وسهولة الوصول إليه من كافة مناطق رام الله والقدرة على تصميم عمارة مكتبية تتميز بالندرة والإطلالة على كافة مرافق البلد الحيوية لتشكل معلم ورمز تستطيع الشركة ان تقدم من خلاله نموذج واضح ومستدام لعملها وكيفية قدرتها على اختيار وتطويع التصميم ليخدم المساحة ويكون بذلك اصبح عنوانا مميزا يخدم كافة المالكين والمستخدمين والمستأجرين من حيث المساحات المتنوعة والأسعار المميزة تخدم القدرة على الاستفادة من الاستثمار المبدئي بما لا يقل عن 20% كعائد استثماري من كافة المكاتب الموجودة في العمارة وكما تلتزم الشركة بتقديم حلول عملية وخطوات للتسليم بالموعد وخدمة ما بعد البيع من خلال برامج متطورة وأدوات وحلول تقدم لأول مرة في محافظة رام الله والبيرة من خلال المطورين العقاريين ليصبح المبنى اكثر قيمة وقدرة على التشغيل بعد التسليم.",
     lookImages: [{
        title: "المشهد من الطابق الأول",
        src: `${pathPrefix}/images/project-1/view/1.jpeg`,
    }, {
        title: "المشهد من  الثاني",
        src: `${pathPrefix}/images/project-1/view/2.jpeg`,
    }, {
        title: "المشهد من الطابق الثالث",
        src: `${pathPrefix}/images/project-1/view/3.jpeg`,
    }, {
        title: "المشهد من الطابق الرابع",
        src: `${pathPrefix}/images/project-1/view/4.jpeg`,
    }, {
        title: "المشهد من الطابق الخامس",
        src: `${pathPrefix}/images/project-1/view/5.jpeg`,
    }, {
        title: "المشهد من الطابق السادس",
        src: `${pathPrefix}/images/project-1/view/6.jpeg`,
    }
    ],
    mapUrl: "https://www.google.com/maps/embed?...",
  },
  // Add more projects here
  {
    id: "2",
    name: "واس هوم",
    location: "مدينة البيرة, خلف حديقة الاستقلال",
    bannerImage: `${pathPrefix}/images/real-estate-web-banner.jpeg`,
    images: [
            {src: `${pathPrefix}/images/project-1/Rawas-home-pic/4.jpg`},
            {src: `${pathPrefix}/images/project-1/Rawas-home-pic/3.jpg`},
            {src: `${pathPrefix}/images/project-1/Rawas-home-pic/2.jpg`},
            {src: `${pathPrefix}/images/project-1/Rawas-home-pic/6.jpg`},
            {src: `${pathPrefix}/images/project-1/Rawas-home-pic/5.jpg`},
            {src: `${pathPrefix}/images/project-1/Rawas-home-pic/1.jpg`},
        ],
        properties: [
            {src: `${pathPrefix}/icons/office.svg`, alt: "flat", title: "نوع المشروع", text: "عمارة سكنية"},
            {src: `${pathPrefix}/icons/office.svg`, alt: "flat", title: "الموقع", text: "مدينة البيرة خلف حديقة الاستقلال"},
            {src: `${pathPrefix}/icons/office.svg`, alt: "flat", title: "المساحة الطابقية", text: "493 متر مربع"},
            {src: `${pathPrefix}/icons/office.svg`, alt: "flat", title: "عدد الطوابق", text: "7 طوابق . 4 طوابق متكررة التقسيم والطابق ألأرضي و الطابق الاخير و طابق المواقف"},
            {
                src: `${pathPrefix}/icons/office.svg`,
                alt: "flat",
                title: "عدد الشقق السكنية",
                text: "16 شقة سكنية موزعين من الطابق الاول للطابق الثالث,وحدتين بالطابق الاخير و وحدتين بطابق التسوية"
            },
            {src: `${pathPrefix}/icons/office.svg`, alt: "office", title: "مساحات الشقق", text: "متنوعة تبدأ من مساحة 127 متر مربع الى 210 متر مربع"},
        ],
        about: " المشروع ليس بكونه الأول كعمارة سكنية....",
    lookImages: [
      { title: "المشهد من الطابق الأول", src: `${pathPrefix}/images/project-1/view/1.jpeg` },
      // ...more
    ],
    mapUrl: "https://www.google.com/maps/embed?...",
  },
];
