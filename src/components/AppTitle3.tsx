import React from "react";
import MotionEndDiv from "@/components/MotionEndDiv";


interface AppTitle3Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text?: string;
}

const AppTitle3: React.FC<AppTitle3Props> = ({text = "", className, ...props}) => {
    return (<MotionEndDiv className="w-full">
        <h3 className={"relative text-xl md:text-2xl lg:text-3xl my-4 after:block after:h-[2px] after:w-16 after:bg-secondary/80 after:mt-1 after:rounded-full after:transition-all after:duration-500 hover:after:w-32 " + className} {...props}>
            <span className="text-foreground">{text}</span>
            <span className="text-sm text-background text-opacity-0">--</span>
            <span className="border-t-4 border-secondary text-xs text-background text-opacity-0">-----------------------------</span>
            <span className="border-t-4 border-secondary text-xs text-background border-dotted"> ........</span>
        </h3>
    </MotionEndDiv>)
}
export default AppTitle3;
