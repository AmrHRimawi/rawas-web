import {ColorScale} from "@nextui-org/react";

export const pathPrefix = "/rawas-web";
// export const pathPrefix = "";

export const navLinks = [
    {name: "الرئيسية", link: `${pathPrefix}/`},
    {name: "عن رواس", link: `${pathPrefix}/about-us`},
    {name: "مشاريعنا", link: `${pathPrefix}/projects`},
    {name: "مستشاري رواس", link: `${pathPrefix}/consultants`},
    {name: "موردي رواس", link: `${pathPrefix}/suppliers`},
    {name: "مقالات وأخبار", link: `${pathPrefix}/blogs`},
    {name: "تواصل معنا", link: `${pathPrefix}/contact-us`},
];

export const socials = (isColored: boolean = false) => {
    return [
        {
            name: "Facebook",
            color: "#3b5998",
            src: `${pathPrefix}/icons/facebook.svg`,
            link: "https://www.facebook.com/rawasps?mibextid=ZbWKwL",
        },
        {
            name: "Telegram",
            color: "#5190ee",
            src: `${pathPrefix}/icons/telegram.svg`,
            link: "https://t.me/rawasplus",
        },
        {
            name: "Instagram",
            color: "#e4405f",
            src: `${pathPrefix}/icons/instagram.svg`,
            link: "https://www.instagram.com/rawas.ps",
        },
        {
            name: "WhatsApp",
            color: "#43a884",
            src: `${pathPrefix}/icons/whatsapp.svg`,
            link: "https://whatsapp.com/channel/0029VaZdaOx7j6fzk3ZH1x0q",
        },
        {
            name: "YouTube",
            color: "#ed0600",
            src: `${pathPrefix}/icons/youtube.svg`,
            link: "https://youtube.com/@rawasplus?si=AaSnXzYRO3tisNiT",
        },
    ]
};


export const primary: ColorScale = {
    50: '#049B98',
    100: '#04918E',
    200: '#048785',
    300: '#037E7B',
    400: '#037472',
    500: '#036A68',
    600: '#03615F',
    700: '#025755',
    800: '#024D4C',
    900: '#024342',
    foreground: '#FFF',
    DEFAULT: '#03615F',
}
export const secondary: ColorScale = {
    50: '#FFEEB1',
    100: '#F0DA9D',
    200: '#DCC689',
    300: '#C8B275',
    400: '#B49E61',
    500: '#A08A4D',
    600: '#8C7639',
    700: '#786225',
    800: '#644e11',
    900: '#503a00',
    foreground: '#FFF',
    DEFAULT: '#C8B275',
}
