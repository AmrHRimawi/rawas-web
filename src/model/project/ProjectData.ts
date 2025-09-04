import {pathPrefix} from "@/utils/Constent";
import {ProjectTypes} from "@/model/project/ProjectType";
import {mapProjectToLight, Project, ProjectLight} from "@/model/project/Project";

// Optimize project data structure for better performance
const projects: Record<number, Project> = {
    1: {
        id: 1,
        name: "مشروع رواس جيت",
        description: "رام الله، حي الكرمل مقابل مبنى تلفزيون فلسطين \"برج مشعل\"",
        type: ProjectTypes.OFFICE,
        image: `${pathPrefix}/images/projects/1/thumb.jpeg`,
        link: `${pathPrefix}/projects/1`,
        images: [
            {src: `${pathPrefix}/images/projects/1/pic/1.jpeg`},
            {src: `${pathPrefix}/images/projects/1/pic/2.jpeg`},
            {src: `${pathPrefix}/images/projects/1/pic/3.jpeg`},
            {src: `${pathPrefix}/images/projects/1/pic/4.jpeg`},
            {src: `${pathPrefix}/images/projects/1/pic/5.jpeg`},
            {src: `${pathPrefix}/images/projects/1/pic/m.jpeg`},
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
            src: `${pathPrefix}/images/projects/1/view/1.jpeg`,
        }, {
            title: "المشهد من الطابق الثاني",
            src: `${pathPrefix}/images/projects/1/view/2.jpeg`,
        }, {
            title: "المشهد من الطابق الثالث",
            src: `${pathPrefix}/images/projects/1/view/3.jpeg`,
        }, {
            title: "المشهد من الطابق الرابع",
            src: `${pathPrefix}/images/projects/1/view/4.jpeg`,
        }, {
            title: "المشهد من الطابق الخامس",
            src: `${pathPrefix}/images/projects/1/view/5.jpeg`,
        }, {
            title: "المشهد من الطابق السادس",
            src: `${pathPrefix}/images/projects/1/view/6.jpeg`,
        }],
        map: {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1902.868659040583!2d35.20212806400692!3d31.912098375793555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU0JzQzLjYiTiAzNcKwMTInMTAuNSJF!5e1!3m2!1sen!2suk!4v1724510930866!5m2!1sen!2suk"},
    },

    2: {
        id: 2,
        name: "مشروع رواس هوم",
        description: "المشروع السكني الأفخم في مدينة البيرة خلف حديقة الاستقلال",
        type: ProjectTypes.OFFICE,
        image: `${pathPrefix}/images/projects/2/thumb.jpeg`,
        link: `${pathPrefix}/projects/2`,
        images: [
            { src: `${pathPrefix}/images/projects/2/pic/1.jpg` },
            { src: `${pathPrefix}/images/projects/2/pic/2.jpg` },
            { src: `${pathPrefix}/images/projects/2/pic/3.jpg` },
            { src: `${pathPrefix}/images/projects/2/pic/4.jpg` },
            { src: `${pathPrefix}/images/projects/2/pic/5.jpg` },
            { src: `${pathPrefix}/images/projects/2/pic/m.jpeg` },
        ],
        properties: [
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "نوع المشروع", text: "عمارة سكنية"},
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "الموقع", text: "مدينة البيرة، خلف حديقة الاستقلال، جانب فيلا بشار المصري"},
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "المساحة الطابقية", text: "437 متر مربع"},
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "عدد الطوابق", text: "7 طوابق .3 طوابق متكررة، بالإضافةإلى الطابق الأرضي الذي يحتوي على شقتين، كل شقة لها حديقة خارجية خاصة، وطابق الروف الذي يحتوي على شقتين، كل شقة لها تراس خاص وطابق مواقف"},
            {
                src: `${pathPrefix}/icons/office.svg`,
                alt: "residential",
                title: "عدد الوحدات السكنية",
                text: "16 وحدة موزعة على ثلاثة وحدات  من الطابق الأرضي  للطابق الثالث و وحدتين في كل من طابق التسوية و طابق الروف"
            },
            {src: `${pathPrefix}/icons/office.svg`, alt: "residential", title: "مساحات الشقق", text: "متنوعة تبدأ من مساحة 127 متر مربع الى 225 متر مربع"},
        ],
        about: "لا يتميز هذا المشروع السكني بكونه أحد أحدث الإضافات المعمارية في محافظة رام الله والبيرة فحسب، بل يرسّخ مكانته كخيار أول لكل من يبحث عن بيئة و ايقونة حقيقية دائمة للسكن العصري في رام الله تجمع بين جودة الحياة وروعة التصميم وذكاء التخطيط. سعت الشركة من خلال هذا المشروع إلى تقديم نموذج سكني يلبي تطلعات العائلات والمستثمرين الطامحين لحياة مستقرة واستثمار آمن على المدى الطويل، حيث تم اختيار الموقع بعناية ليكون قريبًا من المرافق الحيوية والخدمات الأساسية، مع توفير إطلالات خلابة ومساحات خضراء تضفي على المكان طابعًا فريدًا من الراحة والسكينة.وقد نجحت الشركة في تصميم شقق سكنية متنوعة المساحات، تراعي الخصوصية وتلبي مختلف الاحتياجات، مع تشطيبات عالية الجودة ومرافق متكاملة تواكب أحدث معايير البناء الحديثة. ويعكس هذا المشروع التزام الشركة بتوفير حلول سكنية عملية ومرنة، مع ضمان تسليم الشقق في المواعيد المحددة وتقديم خدمات متابعة متقدمة ودعم متواصل بعد التسليم. حيث يستفيد السكان من رعاية خاصة وخدمة عملاء محترفة، لتكون الشركة من أوائل الجهات التي تطبق هذا النهج المتقدم في السوق العقاري المحلي، بما يضمن انتقالًا سلسًا إلى منازلهم الجديدة وراحة بال مستمرة على المدى الطويل.",

        lookImages: [{
            title: "المشهد من الطابق الأول",
            src: `${pathPrefix}/images/projects/2/view/1.jpeg`,
        }, {
            title: "المشهد من الطابق الثاني",
            src: `${pathPrefix}/images/projects/2/view/2.jpeg`,
        }, {
            title: "المشهد من الطابق الثالث",
            src: `${pathPrefix}/images/projects/2/view/3.jpeg`,
        }, {
            title: "المشهد من الطابق الرابع",
            src: `${pathPrefix}/images/projects/2/view/4.jpeg`,
        }, {
            title: "المشهد من الطابق الخامس",
            src: `${pathPrefix}/images/projects/2/view/5.jpeg`,
        }],
        map: {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3629.106687866234!2d35.20865083612953!3d31.918053408660043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU1JzAzLjgiTiAzNcKwMTInMzkuMSJF!5e1!3m2!1sen!2suk!4v1747134296460!5m2!1sen!2suk"},
    },
};

// Get a full project by id
export function getProjectById(id: number): Project | undefined {
    return projects[id];
}

// Get only id and name by id
export function getLightProjectById(id: number): ProjectLight | undefined {
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

