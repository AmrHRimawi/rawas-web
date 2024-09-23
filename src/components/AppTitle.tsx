import React from "react";
import MotionEndDiv from "@/components/MotionEndDiv";


interface AppTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    prefix?: string;
    text?: string;
}

const AppTitle: React.FC<AppTitleProps> = ({prefix = "", text = "", className, ...props}) => {
    return (<MotionEndDiv>
        <div className={"text-2xl md:text-4xl lg:text-6xl font-bold " + className} {...props}>
            <span className="w-28 pt-2 bg-secondary text-secondary border-b-4 border-secondary"> . </span>
            <span className="w-4 ps-8 pt-2 bg-primary text-primary-foreground border-b-4 border-primary">{prefix}</span>
            <span className="border-b-4 border-secondary text-primary">{text}</span>
            <span className="border-b-4 border-secondary border-dotted text-primary-foreground">..</span>
        </div>
    </MotionEndDiv>)
}
export default AppTitle;