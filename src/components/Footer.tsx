import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="text-gray-600 body-font mt-auto border-t">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link href="/">
                    <Image src="/static/logomark.png" alt="Sandyマンのブログ" height={35} width={200} />
                </Link>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    <a
                        href="https://twitter.com/knyttneve"
                        className="text-gray-600 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @sandyman_blog
                    </a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <div>
                        <Link
                            href="https://twitter.com/sandyman_blog"
                            aria-label="Twitter（@sandyman_blog）へのリンクです"
                        >
                            <FaTwitter className="text-blue-500 h-5 w-5" />
                        </Link>
                    </div>
                    <div className="ml-3">
                        <Link
                            href="https://www.youtube.com/@sandyman_linux"
                            aria-label="Youtube（SandyマンのPC部）へのリンクです"
                        >
                            <FaYoutube className="text-red-500 h-5 w-5" />
                        </Link>
                    </div>
                    <div className="ml-3">
                        <Link href="https://github.com/SuperSandyman" aria-label="SandyマンのGitHubへのリンクです">
                            <FaGithub className="text-[#333333] h-5 w-5" />
                        </Link>
                    </div>
                </span>
            </div>
        </footer>
    );
};
