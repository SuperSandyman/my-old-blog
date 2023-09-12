import { getPostById } from "@/lib/getPostById";
import { Metadata } from "next";
import markdownToReact from "@/lib/markdownToReact";
import { Twemoji } from "react-emoji-render";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allPostsData } from "@/lib/api";
import urlJoin from "url-join";
import { Toc } from "@/components/Toc";
import { ShareButtons } from "@/components/ShareButtons";
import "@/styles/prism.css";

const baseURL = process.env.BASE_URL || "";

export const generateStaticParams = async () => {
    return allPostsData.map((post) => {
        return {
            slug: post.id,
        };
    });
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const { slug } = params;
    const post = getPostById(slug);
    if (!post) {
        return {
            title: "404 notfound でござる:)",
        };
    }

    return {
        title: post.title + " | Sandyマンのブログ",
        description: post.content.substring(0, 80),
        openGraph: {
            url: urlJoin(baseURL, "/posts/", post.id),
            title: post.title + " | Sandyマンのブログ",
            description: post.content.substring(0, 80),
            type: "article",
            locale: "ja_JP",
            images: "/opengraph-image.png",
        },
        twitter: {
            card: "summary_large_image",
            title: post.title + " | Sandyマンのブログ",
            description: post.content.substring(0, 80),
            site: "@sandyman_blog",
            creator: "@sandyman_linux",
        },
    };
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const post = await getPostById(slug);

    if (!post) {
        return <div className="font-extrabold text-4xl p-20">{"404でござる:)"}</div>;
    }

    const content = await markdownToReact(post.content, post.id);

    return (
        <div className="grid grid-cols-10 lg:gap-4">
            <div className="col-span-10 lg:col-span-7">
                <div className="">
                    <div className="mt-2 pb-4 text-gray-600 text-sm">
                        <Link href="/" className="hover:underline">
                            ホーム
                        </Link>
                        <span className="mx-2">{">"}</span>
                        <Link href={"/categories/" + post.categories} className="hover:underline">
                            {post.categories}
                        </Link>
                        <span className="mx-2">{">"}</span>
                        <span>{post.title}</span>
                    </div>
                    <div className="my-4">
                        <div className="flex justify-center items-center">
                            <Twemoji svg className="w-[100px] h-[100px] m-2" text={post.emoji || "💻"} />
                        </div>
                        <div className="flex justify-center items-center">
                            <h1 className="font-bold text-2xl pt-8 pb-6 break-all">{post.title}</h1>
                        </div>
                        <div className="">
                            <time className="my-2 text-gray-700 text-[14px] font-semibold pr-2">
                                {format(parseISO(post.date), "yyyy.MM.dd")}
                            </time>
                            <Link
                                href={`/categories/${post.categories}`}
                                className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-blue-200"
                            >
                                {post.categories}
                            </Link>
                            {post.tags &&
                                post.tags.length > 0 &&
                                post.tags.map((tag) => {
                                    return (
                                        <Link
                                            key={tag}
                                            className="text-gray-600 pr-1.5 hover:underline"
                                            href={`/tags/${tag}`}
                                        >
                                            #{tag}
                                        </Link>
                                    );
                                })}
                        </div>
                    </div>
                </div>
                <div>
                    <article className="prose border-t-2 pt-8 mb-10">{content}</article>
                    <div className="flex mb-20">
                        <ShareButtons title={post.title} slug={post.id} />
                    </div>
                </div>
            </div>
            <div className="col-span-10 lg:col-span-3 ml-2">
                <div className="lg:sticky lg:top-0 pt-4 hidden lg:block">
                    <h3 className="font-bold lg:text-2xl text-xl text-gray-900 border-b-2 border-black p-1">目次</h3>
                    <Toc />
                </div>
            </div>
        </div>
    );
};

export default PostPage;
