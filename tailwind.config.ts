import type {Config} from "tailwindcss";
import {ColorScale} from "@nextui-org/react";

const {nextui} = require("@nextui-org/react");

const primary: ColorScale = {
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
const secondary: ColorScale = {
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
const f: ColorScale = {
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

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary,
                secondary,
            }
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};

export default config;
