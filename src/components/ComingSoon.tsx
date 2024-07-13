import Image from "next/image";

export default function ComingSoon() {
    return <div className="flex justify-center items-center">
        <Image width={994} height={746} src="/rawas-web/imgs/coming-soon.png" alt="Coming Soon"/>
        {/*<Image className="-hue-rotate-60" width={994} height={746} src="/rawas-web/imgs/no-data.gif" alt="Coming Soon"/>*/}
    </div>
}