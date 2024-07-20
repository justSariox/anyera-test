import {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://anyera-test.vercel.app/sitemap.xml',
        host: 'https://anyera-test.vercel.app/'
    }
}