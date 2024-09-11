import Image from "next/image";
import React from "react";
import MotionUpDiv from "@/components/MotionUpDiv";
import {pathPrefix} from "@/utils/Constent";

export const AppLineSep = () => <>
    <div className="h-2"/>
    <MotionUpDiv className="flex justify-center gap-1">
        <Image width={255} height={20} src={pathPrefix + "/icons/line.svg"} alt="iamd"/>
        <Image className="hidden md:block" width={255} height={20} src={pathPrefix + "/icons/line.svg"} alt="iamd"/>
        <Image className="hidden lg:block" width={255} height={20} src={pathPrefix + "/icons/line.svg"} alt="iamd"/>
    </MotionUpDiv>
    <div className="h-2"/>
</>;