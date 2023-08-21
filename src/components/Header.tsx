import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center max-w-7xl">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
                <span className="ml-3 text-md">
                    <Image src="/static/logomark.png" alt="Sandyマンのブログ" height={35} width={200} />
                </span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href="/tags">
                    <p className="mr-5 hover:text-gray-900">Tags</p>
                </Link>
                <Link href="/categories">
                    <p className="mr-5 hover:text-gray-900">Categories</p>
                </Link>
                <Link href="/posts/profile">
                    <p className="mr-5 hover:text-gray-900">About</p>
                </Link>
                <Link href="https://zenn.dev/sandyman">
                    <Image src="/static/zenn.png" alt="Zenn" width={80} height={20} />
                </Link>
            </nav>
        </div>
    );
};
