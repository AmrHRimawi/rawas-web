"use client";

import {NextSeo} from "next-seo";
import {baseUrl, title} from "@/app/appMetadata";

export default function BlogSeo({blog}: any) {
    return <NextSeo
        title={blog.name ?? ""}
        description={blog.title ?? ""}
        canonical={baseUrl + "/blogs"}
        openGraph={{
            type: "blog.post",
            title: blog.name ?? "",
            description: blog.title ?? "",
            url: baseUrl + "/blogs",
            images: [{
                url: blog.logo.src,
                alt: blog.logo.alt,
                width: 40,
                height: 40,
            }],
            locale: 'ar_PS',
            siteName: title
        }}/>
};
