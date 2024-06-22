import React from 'react';
import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

// @ts-ignore
interface IconProps extends FontAwesomeIconProps {
    icon?: IconProp;
}

interface IconTextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    icon: string; // Accept either string or React node
    iconProps?: IconProps;
    children?: React.ReactNode;
}

const IconText: React.FC<IconTextProps> = ({icon, iconProps, children, className, ...props}) => {
    // @ts-ignore
    let selectedIcon = Icons[icon]; // Get the corresponding IconDefinition
    if (!selectedIcon) {
        console.error(`Icon '${icon}' not found!`);
        selectedIcon = Icons.faCircleQuestion; // Handle missing icons gracefully
    }

    return (
        <div className={"icon-text flex justify-center item-center " + className} {...props}>
            <FontAwesomeIcon className={"m-1 " + iconProps?.className} icon={selectedIcon}/>
            <span className="m-1"> {children} </span>
        </div>
    );
};

export default IconText;
