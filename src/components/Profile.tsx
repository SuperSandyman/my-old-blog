import Link from "next/link";

import { FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";

export const Profile = () => {
    return (
        <div className="bg-white p-4 rounded-lg border-b-2">
            <div className="text-center">
                <img
                    src="/static/author.webp"
                    alt="Sandyマンのうまのアイコン"
                    width={75}
                    height={75}
                    className="w-[75px] h-[75px] object-cover object-left-top rounded-full border-2 border-gray-900 inline-block"
                />
            </div>
            <p className="text-xl font-bold text-center px-2 py-4">Sandyマン</p>
            <p className="px-2 py-1 leading-7">
                趣味的にブログをやったり開発をしてる暇人。JavaScriptやPythonについての記事を書いたりしています。
            </p>
            <div className="px-4 py-2 flex justify-center">
                <div className="pr-4">
                    <Link href="https://twitter.com/sandyman_blog">
                        <FaTwitter className="text-blue-500 h-5 w-5" />
                    </Link>
                </div>
                <div className="pr-4">
                    <Link href="https://www.youtube.com/@sandyman_linux">
                        <FaYoutube className="text-red-500 h-5 w-5" />
                    </Link>
                </div>
                <div className="pr-4">
                    <Link href="https://github.com/SuperSandyman">
                        <FaGithub className="text-gray-900 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};