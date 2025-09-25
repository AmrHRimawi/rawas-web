import React from "react";
import MotionEndDiv from "@/components/MotionEndDiv";


interface AppTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text?: string;
}

const AppTitle2: React.FC<AppTitleProps> = ({text = "", className, ...props}) => {
    return (<MotionEndDiv className="w-full">
        <h2 className={"relative text-xl md:text-2xl lg:text-3xl my-4 after:block after:h-[2px] after:w-20 after:bg-secondary after:mt-1 after:rounded-full after:transition-all after:duration-500 hover:after:w-32 " + className} {...props}>
            <span className="border-b-4 border-secondary text-foreground">{text}</span>
            <span className="border-b-4 border-secondary border-dotted text-background text-opacity-0"> ..</span>
        </h2>
    </MotionEndDiv>)
}
export default AppTitle2;
