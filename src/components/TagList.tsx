import Link from "next/link";
import { allPostsData } from "@/lib/api";

export const TagList = async () => {
    const tags = Array.from(new Set(allPostsData.flatMap((post) => post.tags)));

    return (
        <ul className="flex flex-wrap px-4 my-2">
            {tags.map((tag, index) => (
                <li className="p-1" key={index}>
                    <Link href={`/tags/` + tag + `/`} itemProp="url">
                        <button className="px-2 mb-1 mr-0.5 text-gray-900 text-lg hover:underline">
                            <div className="flex">
                                <span>#{tag}</span>
                            </div>
                        </button>
                    </Link>
                </li>
            ))}
        </ul>
    );
};
