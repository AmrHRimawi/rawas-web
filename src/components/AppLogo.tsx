import React from "react";
import Image from "next/image";
import {pathPrefix} from "@/utils/Constent";

export const AppLogo = () => (
    <Image className="m-5" width={50} height={100} src={pathPrefix + "/images/rawas-flag.svg"} alt="Rawas"/>
);
