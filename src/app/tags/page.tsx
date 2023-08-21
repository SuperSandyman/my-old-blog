import Link from "next/link";
import { getSortedPostsData } from "@/lib/api";
import { TagList } from "@/components/TagList";
import { Paginate } from "@/components/Paginate";

const TagsPage = async () => {
    return (
        <div className="grid grid-cols-9 lg:gap-4 pb-4">
            <div className="col-span-9 lg:col-span-6 px-4 lg:px-0">
                <h1 className="font-bold text-4xl text-gray-900 border-b-2 border-black py-2">
                    <span className="m-2 block">Tags</span>
                </h1>
                <TagList />
            </div>
            <div className="col-span-9 lg:col-span-3 m-4"></div>
            <Paginate />
        </div>
    );
};

export default TagsPage;
