import { allPostsData } from "@/lib/api";
import { PostList } from "@/components/PostList";
import { SideBar } from "@/components/SideBar/SideBar";
import { CategoriesPaginate } from "@/components/CategoriesPaginate";
import { Metadata } from "next";

export const generateStaticParams = () => {
    const categories = Array.from(new Set(allPostsData.flatMap((post) => post.categories)));
    const decodedCategories = categories.map((category) => decodeURIComponent(category));

    const filteredPosts = allPostsData.filter((post) => {
        return post.categories.some((category) => decodedCategories.includes(category));
    });

    const PER_PAGE = 8;

    const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

    const filteredPages = range(1, Math.ceil(filteredPosts.length / PER_PAGE))
        .filter((id) => id !== 1)
        .map((id) => ({
            id: id.toString(),
        }));

    const categoriesData = categories.map((category) => ({
        category: category,
    }));

    return {
        id: filteredPages,
        categories: categoriesData,
    };
};

export function generateMetadata({ params }: { params: { categories: string } }): Metadata {
    const { categories } = params;

    const decodedCategories = decodeURIComponent(categories);

    return {
        title: decodedCategories + " | Sandyマンのブログ",
        description: decodedCategories + "についての記事一覧",
        openGraph: {
            title: decodedCategories + " | Sandyマンのブログ",
            description: decodedCategories + "についての記事一覧",
            type: "website",
            locale: "ja_JP",
            images: "/opengraph-image.png",
        },
        twitter: {
            card: "summary_large_image",
            title: decodedCategories + " | Sandyマンのブログ",
            description: decodedCategories + "についての記事一覧",
            site: "@sandyman_blog",
            creator: "@sandyman_linux",
        },
    };
}

const Page = ({ params }: { params: { id: number; categories: string } }) => {
    const { categories, id } = params;

    const decodedCategories = decodeURIComponent(categories);

    const filteredPosts = allPostsData.filter((post) => {
        return post.categories.includes(decodedCategories);
    });

    const postCount = filteredPosts.length;

    const PER_PAGE = 8;

    const startIndex = (id - 1) * PER_PAGE;

    const endIndex = Math.min(startIndex + PER_PAGE, postCount);

    const postsOnPage = filteredPosts.slice(startIndex, endIndex);

    return (
        <div className="grid grid-cols-9 lg:gap-4">
            <div className="col-span-9 lg:col-span-6">
                <h1 className="font-bold text-4xl text-gray-900 border-b-2 border-black py-2">
                    <span className="m-2 block">
                        「{decodedCategories}」がついている記事（{postCount}件）
                    </span>
                </h1>
                {postsOnPage.map((post) => {
                    return <PostList post={post} key={post.id} />;
                })}
                <CategoriesPaginate totalCount={postCount} currentPage={id} category={decodedCategories} />
            </div>
            <div className="col-span-9 lg:col-span-3 m-4">
                <SideBar />
            </div>
        </div>
    );
};

export default Page;
