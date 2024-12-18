import { allPostsData } from "@/lib/api";
import { PostList } from "@/components/PostList";
import { SideBar } from "@/components/SideBar/SideBar";
import { TagsPaginate } from "@/components/TagsPaginate";
import { Metadata } from "next";

export const generateStaticParams = () => {
    // カテゴリーを全て取得する
    const allTags = Array.from(new Set(allPostsData.flatMap((post) => post.tags)));

    // ページネーションに使用する1ページあたりの記事数
    const PER_PAGE = 8;

    // カテゴリーごとに処理を行う
    const categoryParams = allTags.flatMap((tag) => {
        // カテゴリーごとに関連する記事をフィルタリング
        const filteredPosts = allPostsData.filter((post) => post.tags.includes(tag));

        // 計算されたページ数を取得
        const totalPages = Math.ceil(filteredPosts.length / PER_PAGE);

        // ページ数が2以上の場合のみカテゴリーとページIDの組み合わせを生成
        return totalPages >= 2
            ? Array.from({ length: totalPages - 1 }, (_, index) => ({
                  tags: tag,
                  id: (index + 2).toString(), // ページIDは2以上の自然数から
              }))
            : [];
    });

    return categoryParams;
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
                <h1 className="font-bold text-4xl text-[#333333] border-b-2 border-black py-2">
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
