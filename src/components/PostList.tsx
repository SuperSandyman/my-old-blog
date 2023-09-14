import { Twemoji } from "react-emoji-render";
import { PostData } from "../types/PostDate";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export const PostList = ({ post }: { post: PostData }) => {
    return (
        <div className="border-b py-2 hover:bg-gray-50">
            <div className="flex m-4">
                <div className="bg-[#F4F4F4] p-4 w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] flex-shrink-0 rounded-lg items-center">
                    <Twemoji
                        svg
                        // className="w-4 h-4"
                        text={post.emoji || "💻"}
                    />
                </div>
                <div className="flex-wrap mx-4">
                    <Link href={"/posts/" + post.id}>
                        <h3 className="font-bold lg:text-2xl text-xl text-[#333333] break-all">{post.title}</h3>
                    </Link>
                    <div className="pt-1">
                        <time className="my-2 text-gray-700 text-[14px] font-semibold pr-2">
                            {format(parseISO(post.date), "yyyy.MM.dd")}
                        </time>
                        <Link href={`/categories/${post.categories}`}>
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-blue-200">
                                {post.categories}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
