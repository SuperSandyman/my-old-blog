import { allPostsData, allPostsLength } from "@/lib/api";
import { PostList } from "@/components/PostList";
import { Paginate } from "@/components/Paginate";
import { SideBar } from "@/components/SideBar/SideBar";

export const generateStaticParams = () => {
    const PER_PAGE = 8;

    const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

    return range(1, Math.ceil(allPostsLength / PER_PAGE))
        .filter((id) => id !== 1) // 1以外の値だけを抽出
        .map((id) => ({
            id: id.toString(),
        }));
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
                <SideBar />
            </div>
        </div>
    );
};

export default Page;
