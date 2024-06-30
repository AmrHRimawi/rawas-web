import React from "react";


interface AppTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    prefix?: string;
    text?: string;
}

const AppTitle: React.FC<AppTitleProps> = ({prefix = "", text = "", className, ...props}) => {
    return (<div>
        <div className={"text-6xl font-bold " + className} {...props}>
            <span className="w-28 pt-2 bg-secondary text-secondary border-b-2 border-secondary"> . </span>
            <span className="w-4 ps-8 pt-2 bg-primary text-primary-foreground border-b-2 border-secondary">{prefix}</span>
            <span className="border-b-2 border-secondary text-primary">{text}</span>
            <span className="border-b-2 border-secondary border-dotted text-primary-foreground">.</span>
        </div>
    </div>)
}
export default AppTitle;