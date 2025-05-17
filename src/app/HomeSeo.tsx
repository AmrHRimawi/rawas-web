"use client";

import {NextSeo} from "next-seo";
import {baseUrl, description, siteMediaThump, title} from "@/app/appMetadata";

export default function HomeSeo() {
    return <NextSeo
        title={title}
        description={description}
        canonical={baseUrl}
        openGraph={{
            title: title,
            description: description,
            url: baseUrl,
            images: [{
                url: siteMediaThump,
                alt: title,
                width: 600,
                height: 600,
            }],
            locale: 'ar_PS',
            siteName: title
        }}
    />
};
