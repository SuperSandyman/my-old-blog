import { CategoriesList } from "@/components/CategoriesList";
import { SideBar } from "@/components/SideBar/SideBar";

export const generateMetadata = () => {
    return {
        title: "Categories | Sandyマンのブログ",
        description: "カテゴリー一覧",
        openGraph: {
            title: "Categories | Sandyマンのブログ",
            description: "カテゴリー一覧",
            type: "website",
            locale: "ja_JP",
            images: "/opengraph-image.png",
        },
        twitter: {
            card: "summary_large_image",
            title: "Categories | Sandyマンのブログ",
            description: "カテゴリー一覧",
            site: "@sandyman_blog",
            creator: "@sandyman_linux",
        },
    };
};

const CategoriesPage = async () => {
    return (
        <div className="grid grid-cols-9 lg:gap-4 pb-4">
            <div className="col-span-9 lg:col-span-6 px-4 lg:px-0">
                <h1 className="font-bold text-4xl text-[#333333] border-b-2 border-black py-2">
                    <span className="m-2 block">Categories</span>
                </h1>
                <CategoriesList />
            </div>
            <div className="col-span-9 lg:col-span-3 m-4">
                <SideBar />
            </div>
        </div>
    );
};

export default CategoriesPage;
