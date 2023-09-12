import Link from "next/link";
import { allPostsData } from "@/lib/api";

export const CategoriesList = async () => {
    const categories = Array.from(new Set(allPostsData.flatMap((post) => post.categories)));

    return (
        <ul className="flex flex-wrap px-4 my-2">
            {categories.map((category, index) => (
                <li className="p-1" key={index}>
                    <Link href={`/categories/` + category + `/`} itemProp="url">
                        <button className="px-2 mb-1 mr-0.5 text-gray-900 text-lg hover:underline">
                            <div className="flex">
                                <span>#{category}</span>
                            </div>
                        </button>
                    </Link>
                </li>
            ))}
        </ul>
    );
};
