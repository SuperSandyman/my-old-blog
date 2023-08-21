import { getPostById } from "@/lib/getPostById";
import markdownToReact from "@/lib/markdownToReact";
import { Twemoji } from "react-emoji-render";
import Link from "next/link";
import { format, parseISO } from "date-fns";

const PostPage = async ({ params }: { params: { slug: string } }) => {
    const post = await getPostById(params.slug);

    const content = await markdownToReact(post.content, post.id);

    return (
        <div className="grid grid-cols-10 lg:gap-4">
            <div className="col-span-10 lg:col-span-7 px-4">
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
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-blue-200">
                            {post.categories}
                        </span>
                        {post.tags &&
                            post.tags.length > 0 &&
                            post.tags.map((tag) => {
                                return (
                                    <span className="text-gray-600 pr-1.5 hover:underline" key={tag}>
                                        #{tag}
                                    </span>
                                );
                            })}
                    </div>
                </div>

                <article className="prose border-t-2 pt-8">{content}</article>
            </div>
        </div>
    );
};

export default PostPage;
