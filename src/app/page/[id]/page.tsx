import { allPostsData, allPostsLength } from "@/lib/api";
import { PostList } from "@/components/PostList";
import { Profile } from "@/components/Profile";
import { Paginate } from "@/components/Paginate";

export const generateStaticParams = () => {
    const PER_PAGE = 8;

    const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

    return range(1, Math.ceil(allPostsLength / PER_PAGE)).map((id) => {
        return {
            id: id.toString(),
        };
    });
};

const Page = ({ params }: { params: { id: number } }) => {
    const PER_PAGE = 8;

    const totalPosts = allPostsLength;

    const startIndex = (params.id - 1) * PER_PAGE;

    const endIndex = Math.min(startIndex + PER_PAGE, totalPosts);

    const postsOnPage = allPostsData.slice(startIndex, endIndex);

    return (
        <div className="grid grid-cols-9 lg:gap-4 pb-4">
            <div className="col-span-9 lg:col-span-6">
                {postsOnPage.map((post) => {
                    return <PostList post={post} key={post.id} />;
                })}
                <Paginate totalCount={allPostsLength} currentPage={params.id} />
            </div>
            <div className="col-span-9 lg:col-span-3 m-4">
                <div>
                    <h3 className="font-bold lg:text-2xl text-xl text-gray-900 border-b-2 border-black p-1">About</h3>
                    <Profile />
                </div>
            </div>
        </div>
    );
};

export default Page;
