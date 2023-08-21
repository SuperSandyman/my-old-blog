import { allPostsData } from "@/lib/api";
import { PostList } from "@/components/PostList";

const TagPage = ({ params }: { params: { tags: string } }) => {
    const decodedTags = decodeURIComponent(params.tags);

    const filteredPosts = allPostsData.filter((post) => {
        return post.tags.includes(decodedTags);
    });

    const postCount = filteredPosts.length;

    return (
        <div className="grid grid-cols-9 lg:gap-4">
            <div className="col-span-9 lg:col-span-6">
                <h1 className="font-bold text-4xl text-gray-900 border-b-2 border-black py-2">
                    <span className="m-2 block">
                        「{decodedTags}」がついている記事（{postCount}件）
                    </span>
                </h1>
                {filteredPosts.map((post) => {
                    return <PostList post={post} key={post.id} />;
                })}
            </div>
        </div>
    );
};

export default TagPage;
