import { MetadataRoute } from "next";
import urlJoin from "url-join";

const baseURL = process.env.BASE_URL || "";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
        },
        sitemap: urlJoin(baseURL, "/sitemap.xml"),
    };
}
