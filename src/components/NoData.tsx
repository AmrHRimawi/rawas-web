// create NoData component image with text under it

import React from "react";
import Image from "next/image";
import {pathPrefix} from "@/utils/Constent";

export default function NoData() {
    return (
        <section className="flex flex-col justify-center items-center h-80">
            <Image width={500} height={400} src={pathPrefix + "/images/no-data.gif"} alt="No Data" className="hue-rotate-180 -z-10"/>
            <p className="text-2xl">لا يوجد في الوقت الحالي</p>
        </section>
    );
}