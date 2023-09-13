import { allPostsData } from "@/lib/api";
import { PostList } from "@/components/PostList";
import { SideBar } from "@/components/SideBar/SideBar";
import { TagsPaginate } from "@/components/TagsPaginate";
import { Metadata } from "next";

export const generateStaticParams = () => {
    const tags = Array.from(new Set(allPostsData.flatMap((post) => post.tags)));
    const decodedTags = tags.map((tag) => decodeURIComponent(tag));

    const filteredPosts = allPostsData.filter((post) => {
        return post.tags.some((tag) => decodedTags.includes(tag));
    });

    const PER_PAGE = 8;

    const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

    return range(1, Math.ceil(filteredPosts.length / PER_PAGE))
        .filter((id) => id !== 1) // 1以外の値だけを抽出
        .map((id) => ({
            id: id.toString(),
        }));
};

export function generateMetadata({ params }: { params: { tags: string } }): Metadata {
    const { tags } = params;

    const decodedTags = decodeURIComponent(tags);

    return {
        title: decodedTags + " | Sandyマンのブログ",
        description: decodedTags + "についての記事一覧",
        openGraph: {
            title: decodedTags + " | Sandyマンのブログ",
            description: decodedTags + "についての記事一覧",
            type: "website",
            locale: "ja_JP",
            images: "/opengraph-image.png",
        },
        twitter: {
            card: "summary_large_image",
            title: decodedTags + " | Sandyマンのブログ",
            description: decodedTags + "についての記事一覧",
            site: "@sandyman_blog",
            creator: "@sandyman_linux",
        },
    };
}

const Page = ({ params }: { params: { id: number; tags: string } }) => {
    const { tags, id } = params;

    const decodedTags = decodeURIComponent(tags);

    const filteredPosts = allPostsData.filter((post) => {
        return post.tags.includes(decodedTags);
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
                        「{decodedTags}」がついている記事（{postCount}件）
                    </span>
                </h1>
                {postsOnPage.map((post) => {
                    return <PostList post={post} key={post.id} />;
                })}
                <TagsPaginate totalCount={postCount} currentPage={id} tag={decodedTags} />
            </div>
            <div className="col-span-9 lg:col-span-3 m-4">
                <SideBar />
            </div>
        </div>
    );
};

export default Page;
