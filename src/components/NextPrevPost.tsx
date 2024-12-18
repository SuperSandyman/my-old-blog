import { allPostsData, allPostsLength } from "@/lib/api";
import { Twemoji } from "react-emoji-render";
import Link from "next/link";
import { format, parseISO } from "date-fns";

export const NextPrevPost = ({ slug }) => {
    const currentPost = allPostsData.find((post) => post.id === slug);

    if (!currentPost) return null;

    const postNum = allPostsData.indexOf(currentPost);

    const prevPost = postNum === allPostsLength - 1 ? null : allPostsData[postNum + 1];

    const nextPost = postNum === 0 ? null : allPostsData[postNum - 1];

    return (
        <div className="md:flex md:justify-between">
            <div className="flex md:border-r-2 md:ml-2 mx-2 my-4 md:pb-0 pb-4 md:w-[50%]">
                {nextPost && (
                    <>
                        <div className="bg-[#F4F4F4] p-4 w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] flex-shrink-0 rounded-lg items-center">
                            <Twemoji svg text={nextPost.emoji || "💻"} />
                        </div>
                        <div className="flex-wrap mx-4">
                            <Link href={"/posts/" + nextPost.id}>
                                <h3 className="font-bold text-xl text-[#333333] break-all">{nextPost.title}</h3>
                            </Link>
                            <div className="pt-1">
                                <time className="my-2 text-gray-700 text-[14px] font-semibold pr-2">
                                    {format(parseISO(nextPost.date), "yyyy.MM.dd")}
                                </time>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="flex md:mr-2 mx-2 my-4 md:w-[50%]">
                {prevPost && (
                    <>
                        <div className="flex-wrap mx-4">
                            <Link href={"/posts/" + prevPost.id}>
                                <h3 className="font-bold text-xl text-[#333333] break-all">{prevPost.title}</h3>
                            </Link>
                            <div className="pt-1 text-right">
                                <time className="my-2 text-gray-700 text-[14px] font-semibold pr-2">
                                    {format(parseISO(prevPost.date), "yyyy.MM.dd")}
                                </time>
                            </div>
                        </div>
                        <div className="bg-[#F4F4F4] p-4 w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] flex-shrink-0 rounded-lg items-center">
                            <Twemoji svg text={prevPost.emoji || "💻"} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
