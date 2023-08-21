import { allPostsData } from "@/lib/api";
import { PostList } from "@/components/PostList";
import { Profile } from "@/components/Profile";
import { Paginate } from "@/components/Paginate";

const Index = async () => {
    return (
        <div className="grid grid-cols-9 lg:gap-4 pb-4">
            <div className="col-span-9 lg:col-span-6">
                {allPostsData.map((post) => {
                    return <PostList post={post} key={post.id} />;
                })}
                <Paginate />
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

export default Index;
