import { FaTwitter, FaGithub } from "react-icons/fa";

export const ShareButtons = ({ title, slug, category }) => {
    return (
        <div>
            <button className=" bg-[#1da1f2] hover:bg-blue-400 py-2 px-4 mr-2 rounded-lg inline-flex items-center">
                <FaTwitter className="text-white mr-2" />
                <a
                    href={`https://twitter.com/intent/tweet?url=https://www.sandyman.dev/posts/${slug}&text=${title}｜Sandyマンのブログ&hashtags=${category}`}
                    className="text-white font-bold"
                >
                    Twitterでシェア！
                </a>
            </button>
            <button className="mt-2 py-2 px-2 rounded-lg inline-flex items-center">
                <FaGithub className="text-[#1F2328] mr-2" />
                <a
                    href={`https://github.com/SuperSandyman/sandyman.dev-content/blob/main/posts/${slug}/index.md`}
                    className="text-gray-600 font-bold"
                >
                    GitHubで記事を修正
                </a>
            </button>
        </div>
    );
};
