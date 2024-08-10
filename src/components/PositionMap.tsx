import React from "react";

interface PositionMapProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    position: { lat: number, lng: number }
    label: string
    width?: string
    height?: string
}

const PositionMap: React.FC<PositionMapProps> = ({position, label, width = "600", height = "450", ...props}) => {
    return (
        <div {...props}>
            {/*<iframe*/}
            {/*    className="w-full h-full"*/}
            {/*    frameBorder="0"*/}
            {/*    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${position.lat},${position.lng}&zoom=15`}*/}
            {/*/>*/}

            {/*Rawas Gate*/}
            {/*<iframe title={label} className="w-full h-full"*/}
            {/*        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d763.712068274528!2d35.20237942287825!3d31.912127845933796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU0JzQzLjQiTiAzNcKwMTInMTAuNiJF!5e0!3m2!1sen!2suk!4v1722684833847!5m2!1sen!2suk"*/}
            {/*        width={width} height={height} style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>*/}

            {/*Rawas Office*/}
            <iframe title={label} className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1693.180457929866!2d35.21251353878094!3d31.923957270036187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU1JzI2LjIiTiAzNcKwMTInNDkuNyJF!5e0!3m2!1sen!2suk!4v1722699522803!5m2!1sen!2suk"
                    width={width} height={height} style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default PositionMap;