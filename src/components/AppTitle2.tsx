import React from "react";


interface AppTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text?: string;
}

const AppTitle2: React.FC<AppTitleProps> = ({text = "", className, ...props}) => {
    return (<div>
        <div className={"text-3xl my-4 " + className} {...props}>
            <span className="border-b-2 border-secondary text-foreground">{text}</span>
        </div>
    </div>)
}
export default AppTitle2;