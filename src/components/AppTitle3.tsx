import React from "react";
import MotionEndDiv from "@/components/MotionEndDiv";


interface AppTitle3Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text?: string;
}

const AppTitle3: React.FC<AppTitle3Props> = ({text = "", className, ...props}) => {
    return (<MotionEndDiv className="w-full">
        <div className={"text-3xl my-4 " + className} {...props}>
            <span className="text-foreground">{text}</span>
            <span className="text-sm text-background">--</span>
            <span className="border-t-4 border-secondary text-xs text-background">-----------------------------</span>
            <span className="border-t-4 border-secondary text-xs text-background border-dotted"> ........</span>
        </div>
    </MotionEndDiv>)
}
export default AppTitle3;