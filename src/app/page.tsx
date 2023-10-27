import { allPostsData, allPostsLength } from "@/lib/api";
import { PostList } from "@/components/PostList";
import { Paginate } from "@/components/Paginate";
import { SideBar } from "@/components/SideBar/SideBar";

const Index = async () => {
    const PER_PAGE = 8;

    const totalPosts = allPostsLength;

    const startIndex = (1 - 1) * PER_PAGE;

    const endIndex = Math.min(startIndex + PER_PAGE, totalPosts);

    const postsOnPage = allPostsData.slice(startIndex, endIndex);

    return (
        <div className="grid grid-cols-9 lg:gap-4 pb-4">
            <div className="col-span-9 lg:col-span-6">
                {postsOnPage.map((post) => {
                    return <PostList post={post} key={post.id} />;
                })}
                <Paginate totalCount={allPostsLength} currentPage={1} />
            </div>
            <div className="col-span-9 lg:col-span-3 m-4">
                <SideBar />
            </div>
        </div>
    );
};

export default Index;
