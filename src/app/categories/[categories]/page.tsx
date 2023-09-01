import { allPostsData } from "@/lib/api";
import { PostList } from "@/components/PostList";

export const generateStaticParams = () => {
    const categories = Array.from(new Set(allPostsData.flatMap((post) => post.categories)));
    return categories.map((category) => {
        return {
            categories: category,
        };
    });
};

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
