import Image from "next/image";
import {pathPrefix} from "@/utils/Constent";

export default function ComingSoon() {
    return <div className="flex justify-center items-center">
        <Image width={994} height={746} src={pathPrefix + "/images/coming-soon.png"} alt="Coming Soon"/>
    </div>
}