import {pathPrefix} from "@/utils/Constent";
import {ProjectTypes} from "@/model/project/ProjectType";
import {mapProjectToLight, Project, ProjectLight} from "@/model/project/Project";

const projects: Record<number, Project> = {
    1: {
        id: 1,
        name: "مشروع رواس جيت",
        description: "رام الله، حي الكرمل مقابل مبنى تلفزيون فلسطين `”برج مشعل“",
        type: ProjectTypes.OFFICE,
        image: `${pathPrefix}/images/projects/1/thumb.jpeg`,
        link: `${pathPrefix}/projects/1`,
        images: [
            {src: `${pathPrefix}/images/projects/1/pic/1.jpeg`},
            {src: `${pathPrefix}/images/projects/1/pic/2.jpeg`},
            {src: `${pathPrefix}/images/projects/1/pic/3.jpeg`},
            {src: `${pathPrefix}/images/projects/1/pic/4.jpeg`},
            {src: `${pathPrefix}/images/projects/1/pic/5.jpeg`},
            {src: `${pathPrefix}/images/projects/1/pic/6.jpg`},
            {src: `${pathPrefix}/images/projects/1/pic/m.jpeg`},
        ],
        properties: [
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "إنطلاق المشروع", text:"2024" },
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "حالة المشروع", text:"مباع بالكامل" },
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "تاريخ التسليم", text:"/2027" },
            {src: `${pathPrefix}/icons/office.svg`, alt: "office", title: "نوع المشروع", text: "عمارة مكاتب."},
            {src: `${pathPrefix}/icons/office.svg`, alt: "office", title: "الموقع", text: "مدينة رام الله حي الكرمل مقابل مبنى تلفزيون فلسطين برج مشعل."},
            {src: `${pathPrefix}/icons/office.svg`, alt: "office", title: "المساحة الطابقية", text: "493 متر مربع."},
            {src: `${pathPrefix}/icons/office.svg`, alt: "office", title: "عدد الطوابق", text: "9 طوابق تقسم الى  6 طوابق متكررة التقسيم والطابق الأرضي وطابقين مواقف."},
            {
                src: `${pathPrefix}/icons/office.svg`,
                alt: "office",
                title: "عدد الوحدات المكتبية",
                text: "أربعين وحدة موزعة على ست وحدات في كل طابق من الأول للسادس و ثلاثة وحدات في الطابق الأرضي."
            },
            {src: `${pathPrefix}/icons/office.svg`, alt: "office", title: "عدد مواقف السيارات", text: ""},
            {src: `${pathPrefix}/icons/office.svg`, alt: "office", title: "مساحات المكاتب", text: "متنوعة تبدأ من مساحة 66.4 متر مربع الى 116.6 متر مربع."},
        ],

      /*  values: [
        {
            title: "اختيار الموقع",
            text: "تم اختيار موقع مشروع رواس جيت بعناية ليجمع بين سهولة الوصول، والإطلالة المفتوحة، والقرب من أهم المرافق والمؤسسات الحيوية في مدينة رام الله.",
        },
    ],*/
        about: "يتميز المشروع ليس بكونه الأول كعمارة مكتبية في مدينة رام الله تسعى الشركة من خلاله لاستقطاب كافة المميزين والمستثمرين والمعنيين في القطاع العقاري بل بصفته بوابة تشمل كافة الراغبين بالاستفادة من خبرة الشركة ومنتجاتها على المدى الطويل بحيث استطاعت الشركة ان تؤسس لمشروع يعد أيقونة للعمل المكتبي من حيث التميز باختيار الموقع وإطلالاته وسهولة الوصول إليه من كافة مناطق رام الله والقدرة على تصميم عمارة مكتبية تتميز بالندرة والإطلالة على كافة مرافق البلد الحيوية لتشكل معلم ورمز تستطيع الشركة ان تقدم من خلاله نموذج واضح ومستدام لعملها وكيفية قدرتها على اختيار وتطويع التصميم ليخدم المساحة ويكون بذلك اصبح عنوانا مميزا يخدم كافة المالكين والمستخدمين والمستأجرين من حيث المساحات المتنوعة والأسعار المميزة تخدم القدرة على الاستفادة من الاستثمار المبدئي بما لا يقل عن 20% كعائد استثماري من كافة المكاتب الموجودة في العمارة وكما تلتزم الشركة بتقديم حلول عملية وخطوات للتسليم بالموعد وخدمة ما بعد البيع من خلال برامج متطورة وأدوات وحلول تقدم لأول مرة في محافظة رام الله والبيرة من خلال المطورين العقاريين ليصبح المبنى أكثر قيمة وقدرة على التشغيل بعد التسليم.",

        lookImages: [{
            title: "",
            src: ``,
        }, {
            title: "",
            src: ``,
        }, {
            title: "",
            src: ``,
        }, {
            title: "",
            src: ``,
        }, {
            title: "",
            src: ``,
        }, {
            title: "",
            src: ``,
        }],
         CurrentImages: [{
            title: "",
            src: `${pathPrefix}/images/projects/1/current/1.jpg`,
        }, {
            title: "",
            src: `${pathPrefix}/images/projects/1/current/2.jpg`,
        }, {
            title: "",
            src: `${pathPrefix}/images/projects/1/current/3.jpg`,
        }, {
            title: "",
            src: `${pathPrefix}/images/projects/1/current/4.jpg`,
        }, {
            title: "",
            src: `${pathPrefix}/images/projects/1/current/5.jpg`,
        }, ],
        map: {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1902.868659040583!2d35.20212806400692!3d31.912098375793555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU0JzQzLjYiTiAzNcKwMTInMTAuNSJF!5e1!3m2!1sen!2suk!4v1724510930866!5m2!1sen!2suk"},
    },
 

    2: {
        id: 2,
        name: "مشروع رواس هوم",
        description: "البيرة - البالوع، بجانب مسجد الكوثر، خلف حديقة الاستقلال.",
        type: ProjectTypes.RESIDENTIAL,
        image: `${pathPrefix}/images/projects/2/thumb.jpeg`,
        link: `${pathPrefix}/projects/2`,
        images: [
            
            { src: `${pathPrefix}/images/projects/2/pic/1.jpg` },
            { src: `${pathPrefix}/images/projects/2/pic/2.jpg` },
            { src: `${pathPrefix}/images/projects/2/pic/3.jpg` },
            { src: `${pathPrefix}/images/projects/2/pic/4.jpg` },
            { src: `${pathPrefix}/images/projects/2/pic/5.jpg` },
            { src: `${pathPrefix}/images/projects/2/pic/6.jpg` },
            { src: `${pathPrefix}/images/projects/2/pic/m.jpeg` },
        ],
        properties: [
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "إنطلاق المشروع", text:"2025" },
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "حالة المشروع", text:"قيد التنفيذ - مباع جزئياً" },
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "تاريخ التسليم", text:"/2027" },
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "نوع المشروع", text: "عمارة سكنية"},
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "الموقع", text: "مدينة البيرة، خلف حديقة الاستقلال، جانب فيلا بشار المصري"},
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "المساحة الطابقية", text: "437 متر مربع"},
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "عدد الطوابق", text: " 7 طوابق، تشمل طابق كراجات، وطابقًا يضم فيلتين مستقلتين، و5 طوابق متكررة التقسيم. "},
            {
                src: `${pathPrefix}/icons/office.svg`,
                alt: "residential",
                title: "عدد الوحدات السكنية",
                text: "16 وحدة سكنية موزعة بواقع 3 وحدات في كل طابق من الطابق الأرضي حتى الطابق الرابع، ووحدتين في طابق التسوية، لكلٍّ منهما مدخل خاص، بالإضافة إلى حديقة خاصة لكل وحدة."
                      
            },
            {src: `${pathPrefix}/icons/office.svg`, alt: "office", title: "عدد مواقف السيارات", text: ""},
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "مساحات الشقق", text: "متنوعة تبدأ من مساحة 127 متر مربع الى 225 متر مربع"},
        ],
        about: "لا يتميز هذا المشروع السكني بكونه أحد أحدث الإضافات المعمارية في محافظة رام الله والبيرة فحسب، بل يرسّخ مكانته كخيار أول لكل من يبحث عن بيئة و ايقونة حقيقية دائمة للسكن العصري في رام الله تجمع بين جودة الحياة وروعة التصميم وذكاء التخطيط. سعت الشركة من خلال هذا المشروع إلى تقديم نموذج سكني يلبي تطلعات العائلات والمستثمرين الطامحين لحياة مستقرة واستثمار آمن على المدى الطويل، حيث تم اختيار الموقع بعناية ليكون قريبًا من المرافق الحيوية والخدمات الأساسية.كما حرصت الشركة على تصميم المشروع بطريقة تمنحه حضورًا بصريًا أنيقًا ومريحًا، مع الاهتمام بالواجهة والمحيط الخارجي، وإضفاء لمسات جمالية مدروسة عند المدخل تعزز من هوية المبنى وتمنحه طابعًا مميزًا..وقد نجحت الشركة في تصميم شقق سكنية متنوعة المساحات، تراعي الخصوصية وتلبي مختلف الاحتياجات، مع تشطيبات عالية الجودة ومرافق متكاملة تواكب أحدث معايير البناء الحديثة. ويعكس هذا المشروع التزام الشركة بتوفير حلول سكنية عملية ومرنة، مع ضمان تسليم الشقق في المواعيد المحددة وتقديم خدمات متابعة متقدمة ودعم متواصل بعد التسليم. حيث يستفيد السكان من رعاية خاصة وخدمة عملاء محترفة، لتكون الشركة من أوائل الجهات التي تطبق هذا النهج المتقدم في السوق العقاري المحلي، بما يضمن انتقالًا سلسًا إلى منازلهم الجديدة وراحة بال مستمرة على المدى الطويل.",

        lookImages: [{
            title: "مخطط طابق الشقق مع حدائق",
            src: `${pathPrefix}/images/projects/2/view/-1.png`,
        }, {
           title:"مخطط الطابق الأرضي",
            src: `${pathPrefix}/images/projects/2/view/0.png`,
        }, {
            title: "مخطط الطابق الأول",
            src: `${pathPrefix}/images/projects/2/view/1.png`,
        }, {
             title: "مخطط الطابق الثاني",
            src: `${pathPrefix}/images/projects/2/view/2.png`,
        }, {
            title: "مخطط الطابق الثالث",
            src: `${pathPrefix}/images/projects/2/view/3.png`,
            
        },
    {
            title: "مخطط الطابق الرابع",
            src: `${pathPrefix}/images/projects/2/view/4.png`,
            
        },
    ],
     CurrentImages: [{
            title: "",
            src: ``,
        }, {
            title: "",
            src: ``,
        }, {
            title: "",
            src: ``,
        }, {
            title: "",
            src: ``,
        }, {
            title: "",
            src: ``,
        }, {
            title: "",
            src: ``,
        }],
        map: {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3629.106687866234!2d35.20865083612953!3d31.918053408660043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU1JzAzLjgiTiAzNcKwMTInMzkuMSJF!5e1!3m2!1sen!2suk!4v1747134296460!5m2!1sen!2suk"},
    },
    3: {
        id: 3,
        name: "مشروع رواس سويت",
        description: "البيرة-البالوع، بجانب شركة جوال",
        type: ProjectTypes.RESIDENTIAL,
        image: `${pathPrefix}/images/projects/3/thumb.jpeg`,
        link: `${pathPrefix}/projects/3`,
        images: [
            { src: `${pathPrefix}/images/projects/3/pic/1.jpeg` },
            { src: `${pathPrefix}/images/projects/3/pic/2.jpeg` },
            { src: `${pathPrefix}/images/projects/3/pic/3.jpeg` },
            { src: `${pathPrefix}/images/projects/3/pic/4.jpeg` },
            { src: `${pathPrefix}/images/projects/3/pic/5.jpeg` },
            { src: `${pathPrefix}/images/projects/3/pic/6.jpeg`},
             { src: `${pathPrefix}/images/projects/3/pic/m.jpeg`},
        ],
        properties: [
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "إنطلاق المشروع", text:"2/2026" },
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "حالة المشروع", text:"قيد التنفيذ - مباع جزئياً" },
             {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "تاريخ التسليم", text:"2/2028" },
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "نوع المشروع", text: "عمارة سكنية"},
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "الموقع", text: "مدينة البيرة, بجانب شركة جوال"},
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "المساحة الطابقية", text: "395 متر مربع"},
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "عدد الطوابق", text: "  6 طوابق تشمل طابق الكراجات, 5 طوابق مكررة التقسيم و طابق كراجات. "},
            
            {
                src: `${pathPrefix}/icons/office.svg`,
                alt: "residential",
                title: "عدد الوحدات السكنية",
                text: "25 وحدة سكنية موزعة بواقع 5 وحدات في كل طابق من الطابق الأول حتى الطابق الخامس ."
                      
            },
            {src: `${pathPrefix}/icons/office.svg`, alt: "office", title: "عدد مواقف السيارات", text: "25"},
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "مساحات الشقق", text: "متنوعة تبدأ من مساحة 68 متر مربع الى 94 متر مربع"},
        ],
        about: "في موقعٍ حيوي يختصر معنى القرب من قلب الحياة، يأتي مشروع رواس سويت بجانب شركة جوال ليقدّم نموذجًا استثمارياً عقاريًا مختلفًا يجمع بين السكن العصري والاستثمار الذكي في واحدة من أكثر المناطق الاستثمارية طلبًا في مدينة البيرة. لا يقوم تميّز المشروع على موقعه فحسب، بل على الفكرة التي ُني من أجلها؛ مساحات مدروسة بعناية تبدأ من 68 مترًا مربعًا وتصل إلى 94 مترًا مربعًا، صُممت لتمنح ساكنيها أعلى درجات الراحة والعملية، وتمنح مستثمريها فرصة استثمارية عقارية ذات قيمة مستدامة وطلب متجدد. يمثل رواس سويت خيارًا مثاليًا لمن يبحث عن استديو في موقع نابض بالحيوية، كما يشكّل فرصة استثمارية واعدة لمن يدرك قيمة العقار حين يجتمع الموقع الذكي، والتخطيط المتقن، و التصميم اللافت وجودة التنفيذ في مشروع واحد. حرصت شركة رواس للاستثمار العقاري من خلال هذا المشروع على تقديم تجربة استثمارية سكنية متكاملة لا تُقاس بحجم المساحة فقط، بل بجودة استغلالها، وأناقة تفاصيلها، ومرونة استخدامها؛ ليكن كل استوديو مساحةً للحياة، وفرصةً للنمو، واستثمارًا يزداد ثباتًا مع الزمن. رواس سويت… حيث  يلتقي السكن العملي بالفخامة الهادئة، وتتحول المساحة المدروسة إلى قيمة استثمارية عقارية حقيقية.",

        lookImages: [{
            title: "مخطط الطابق الأول",
            src: `${pathPrefix}/images/projects/3/view/1.png`,
        }, {
            title:"مخطط الطابق الثاني",
            src: `${pathPrefix}/images/projects/3/view/2.png`,
        }, {
            title: "مخطط الطابق الثالث",
            src: `${pathPrefix}/images/projects/3/view/3.png`,
        }, {
            title: "مخطط الطابق الرابع",
            src: `${pathPrefix}/images/projects/3/view/4.png`,
        }, {
            title: "مخطط الطابق الخامس",
            src: `${pathPrefix}/images/projects/3/view/5.png`,
        }],
         CurrentImages: [{
            title: "",
            src: `${pathPrefix}/images/projects/3/current/1.jpeg`,
        }, {
            title: "",
            src: `${pathPrefix}/images/projects/3/current/2.jpeg`,
        }, {
            title: "",
            src: `${pathPrefix}/images/projects/3/current/3.jpeg`,
        }, {
            title: "",
            src: `${pathPrefix}/images/projects/3/current/4.jpeg`,
        }, {
            title: "",
            src: ``,
        }, {
            title: "",
            src: ``,
        }],
        map: {src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1041.6542927929074!2d35.21375780527226!3d31.928241170416374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1784200637039!5m2!1sen!2s" 
},},
    
};

// Get a full project by id
export function getProjectById(id: number) {
    return projects[id];
}

// Get only id and name by id
export function getLightProjectById(id: number) {
    const project = projects[id];
    if (!project) return undefined;
    return mapProjectToLight(project);
}

// Get all projects as an array
export function getProjects(): Project[] {
    return Object.values(projects);
}

// Get all projects as an array with only id and name
export function getLightProjects(): ProjectLight[] {
    return Object.values(projects).map(mapProjectToLight);
}

// Get all projects ids
export function getProjectsIds(): string[] {
    return Object.keys(projects);
}


