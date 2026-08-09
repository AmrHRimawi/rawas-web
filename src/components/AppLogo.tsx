import React from "react";
import Image from "next/image";
import {pathPrefix} from "@/utils/Constent";
import {cn} from "@/utils/TailwindUtil";

interface AppLogoProps {
    /** Light edge so the mark stays readable over transparent nav / busy heroes */
    withBackdrop?: boolean;
}

export const AppLogo = ({withBackdrop = false}: AppLogoProps) => (
    <Image
        className={cn(
            "m-5 transition-[filter] duration-300",
            withBackdrop && "[filter:drop-shadow(0_0_1px_rgba(255,255,255,0.95))_drop-shadow(0_0_6px_rgba(255,255,255,0.55))]"
        )}
        width={50}
        height={54}
        src={pathPrefix + "/images/rawas-flag.svg"}
        alt="Rawas"
        priority
    />
);
