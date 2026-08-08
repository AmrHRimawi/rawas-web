"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { pathPrefix } from "@/utils/Constent";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
    {
        image: pathPrefix + "/images/real-estate-web-banner.jpeg",
        title: "رواس هوم",
    },
    {
        image: pathPrefix + "/images/real-estate-web-banner.jpeg",
        title: "رواس جيت",
    },
    {
        image: pathPrefix + "/images/real-estate-web-banner.jpeg",
        title:" رواس سويت",
    },
];

export default function HomeHeroSlider() {
    return (
        <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={slides.length > 1}
            speed={1200}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            className="w-full h-screen"
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.image} className="w-full h-full">
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url("${slide.image}")`,
                        }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}