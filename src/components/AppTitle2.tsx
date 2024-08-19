import React from "react";
import MotionUpDiv from "@/components/MotionUpDiv";


interface AppTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text?: string;
}

const AppTitle2: React.FC<AppTitleProps> = ({text = "", className, ...props}) => {
    return (<MotionUpDiv>
        <div className={"text-3xl my-4 " + className} {...props}>
            <span className="border-b-4 border-secondary text-foreground">{text}</span>
            <span className="border-b-4 border-secondary border-dotted text-background"> ..</span>
        </div>
    </MotionUpDiv>)
}
export default AppTitle2;