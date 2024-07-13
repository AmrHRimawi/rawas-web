import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faSquareInstagram, faSquareWhatsapp, faTelegram} from "@fortawesome/free-brands-svg-icons";

export const socials = [
    {
        name: "Facebook",
        icon: <FontAwesomeIcon icon={faFacebook} size="xl"/>,
        link: "https://www.facebook.com/rawasps?mibextid=ZbWKwL"
    },
    {
        name: "Instagram",
        icon: <FontAwesomeIcon icon={faSquareInstagram} size="xl"/>,
        link: "https://www.instagram.com/rawas.ps"
    },
    {
        name: "Telegram",
        icon: <FontAwesomeIcon icon={faTelegram} size="xl"/>,
        link: "https://t.me/rawasplus"
    },
    {
        name: "Telegram",
        icon: <FontAwesomeIcon icon={faSquareWhatsapp} size="xl"/>,
        link: "https://whatsapp.com/channel/0029VaZdaOx7j6fzk3ZH1x0q"
    },
];