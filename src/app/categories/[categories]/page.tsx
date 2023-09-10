import { allPostsData } from "@/lib/api";
import { PostList } from "@/components/PostList";
import { Metadata } from "next";

export const generateStaticParams = () => {
    const categories = Array.from(new Set(allPostsData.flatMap((post) => post.categories)));
    return categories.map((category) => {
        return {
            categories: category,
        };
    });
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

const CategoriesPage = ({ params }: { params: { categories: string } }) => {
    const decodedCategories = decodeURIComponent(params.categories);

    const filteredPosts = allPostsData.filter((post) => {
        return post.categories.includes(decodedCategories);
    });

    const postCount = filteredPosts.length;

    return (
        <div className="grid grid-cols-9 lg:gap-4">
            <div className="col-span-9 lg:col-span-6">
                <h1 className="font-bold text-4xl text-gray-900 border-b-2 border-black py-2">
                    <span className="m-2 block">
                        「{decodedCategories}」がついている記事（{postCount}件）
                    </span>
                </h1>
                {filteredPosts.map((post) => {
                    return <PostList post={post} key={post.id} />;
                })}
            </div>
        </div>
    );
};

export default CategoriesPage;
