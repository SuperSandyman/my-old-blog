import { MetadataRoute } from "next";
import { allPostsData } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "";
    const lastModified = new Date();

    const staticPaths = [
        {
            url: baseURL,
            title: "Sandyマンのブログ",
            lastModified,
        },
    ];

    const dynamicPaths = allPostsData.map((post) => {
        return {
            url: `${baseURL}/posts/${post.id}`,
            lastModified,
        };
    });

    return [...staticPaths, ...dynamicPaths];
}
