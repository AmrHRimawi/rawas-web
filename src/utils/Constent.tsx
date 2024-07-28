import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faSquareInstagram, faSquareWhatsapp, faSquareYoutube, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {ColorScale} from "@nextui-org/react";

export const socials = (isColored: boolean = false) => {
    return [
        {
            name: "Facebook",
            icon: <FontAwesomeIcon icon={faFacebook} color={isColored ? "#3b5998" : undefined} size="xl"/>,
            link: "https://www.facebook.com/rawasps?mibextid=ZbWKwL",
        },
        {
            name: "Instagram",
            icon: <FontAwesomeIcon icon={faSquareInstagram} color={isColored ? "#e4405f" : undefined} size="xl"/>,
            link: "https://www.instagram.com/rawas.ps",
        },
        {
            name: "Telegram",
            icon: <FontAwesomeIcon icon={faTelegram} color={isColored ? "#5190ee" : undefined} size="xl"/>,
            link: "https://t.me/rawasplus",
        },
        {
            name: "WhatsApp",
            icon: <FontAwesomeIcon icon={faSquareWhatsapp} color={isColored ? "#43a884" : undefined} size="xl"/>,
            link: "https://whatsapp.com/channel/0029VaZdaOx7j6fzk3ZH1x0q",
        },
        {
            name: "YouTube",
            icon: <FontAwesomeIcon icon={faSquareYoutube} color={isColored ? "#ed0600" : undefined} size="xl"/>,
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
