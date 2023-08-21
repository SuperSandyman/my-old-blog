import Link from "next/link";
import { getSortedPostsData } from "@/lib/api";
import { CategoriesList } from "@/components/CategoriesList";

const CategoriesPage = async () => {
    return (
        <div className="grid grid-cols-9 lg:gap-4 pb-4">
            <div className="col-span-9 lg:col-span-6 px-4 lg:px-0">
                <h1 className="font-bold text-4xl text-gray-900 border-b-2 border-black py-2">
                    <span className="m-2 block">Categories</span>
                </h1>
                <CategoriesList />
            </div>
            <div className="col-span-9 lg:col-span-3 m-4"></div>
        </div>
    );
};

export default CategoriesPage;
