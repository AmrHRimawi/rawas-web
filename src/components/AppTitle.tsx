import React from "react";
import MotionEndDiv from "@/components/MotionEndDiv";


interface AppTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    prefix?: string;
    text?: string;
}

const AppTitle: React.FC<AppTitleProps> = ({prefix = "", text = "", className = "", ...props}) => {
    return (<MotionEndDiv>
        <h2 className={`relative text-2xl md:text-4xl lg:text-6xl font-bold after:block after:h-[3px] after:w-28 after:bg-secondary after:mt-2 after:rounded-full after:transition-all after:duration-500 hover:after:w-36 ${className}`.trim()} {...props}>
            <span className="w-28 pt-2 bg-secondary text-secondary border-b-4 border-secondary"> . </span>
            <span className="w-4 ps-8 pt-2 bg-primary text-primary-foreground border-b-4 border-primary">{prefix}</span>
            <span className="border-b-4 border-secondary text-primary">{text}</span>
            <span className="border-b-4 border-secondary border-dotted text-primary-foreground text-opacity-0">..</span>
        </h2>
    </MotionEndDiv>)
}
export default AppTitle;
