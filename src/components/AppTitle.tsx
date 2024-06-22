import React from "react";


interface AppTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    first?: string;
    others?: string;
}

const AppTitle: React.FC<AppTitleProps> = ({first = "", others = "", className, ...props}) => {
    return (<div>
        <div className={"text-6xl font-bold " + className} {...props}>
            <span className="w-28 bg-secondary text-secondary border-b-2 border-secondary"> . </span>
            <span className="w-4 ps-8 bg-primary text-primary-foreground border-b-2 border-secondary">{first}</span>
            <span className="border-b-2 border-secondary text-primary">{others}</span>
        </div>
    </div>)
}
export default AppTitle;