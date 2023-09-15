import Rss from "rss";
import { allPostsData } from "@/lib/api";
import urlJoin from "url-join";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "";

export async function GET() {
    const feed = new Rss({
        title: "Sandyマンのブログ",
        description: "JavaScriptやLinuxなどいろいろ記事書いてます",
        feed_url: urlJoin(baseURL, "/index.xml"),
        site_url: baseURL,
        language: "ja",
    });

    allPostsData.forEach((post) => {
        feed.item({
            title: post.title,
            description: post.content.substring(0, 80),
            url: urlJoin(baseURL, "/posts/", post.id),
            date: post.date,
        });
    });

    return new Response(feed.xml(), {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
