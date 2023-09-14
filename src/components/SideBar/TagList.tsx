import { allPostsData } from "@/lib/api";
import Link from "next/link";

export const TagList = () => {
    const tags = Array.from(new Set(allPostsData.flatMap((post) => post.tags)));

    return (
        <div className="border-b-2">
            <h3 className="font-bold lg:text-2xl text-xl text-[#333333] border-b-2 border-black p-1 pt-4">Tags</h3>
            <ul className="flex flex-wrap px-4 my-2">
                {tags.slice(0, 30).map((tag, index) => (
                    <li className="p-1" key={index}>
                        <Link href={`/tags/` + tag + `/`} itemProp="url">
                            <button className="px-2 mb-1 mr-0.5 text-[#333333] rounded-lg text-lg">
                                <div className="flex">
                                    <span>#{tag}</span>
                                </div>
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="text-center">
                <Link href="/tags">
                    <button className="px-4 py-2 mt-2 mb-4 bg-gray-900 text-white hover:bg-gray-800 rounded-lg">
                        もっと見る
                    </button>
                </Link>
            </div>
        </div>
    );
};
