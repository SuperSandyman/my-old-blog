import { FaTwitter } from "react-icons/fa";

export const ShareButtons = ({ title, slug }) => {
    return (
        <div>
            <button className=" bg-blue-500 py-2 px-4 rounded-lg inline-flex items-center">
                <FaTwitter className="text-white mr-2" />
                <a
                    href={`https://twitter.com/intent/tweet?text=${title} | Sandyマンのブログ https://www.sandyman.dev/posts/${slug}`}
                    className="text-white font-bold"
                >
                    Twitterでシェア！
                </a>
            </button>
        </div>
    );
};
