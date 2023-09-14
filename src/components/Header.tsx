import Link from "next/link";
import Image from "next/image";

export const Header = () => {
    return (
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center max-w-7xl">
            <Link className="flex title-font font-medium items-center text-[#333333] mb-4 md:mb-0" href="/">
                <span className="ml-3 text-md">
                    <Image src="/static/logomark.png" alt="Sandyマンのブログ" height={35} width={200} />
                </span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold">
                <Link href="/tags">
                    <p className="mr-5 hover:text-gray-700" title="Tags">
                        Tags
                    </p>
                </Link>
                <Link href="/categories">
                    <p className="mr-5 hover:text-gray-700" title="Categories">
                        Categories
                    </p>
                </Link>
                <Link href="/posts/profile">
                    <p className="mr-5 hover:text-gray-700" title="About">
                        About
                    </p>
                </Link>
                <Link href="https://zenn.dev/sandyman">
                    <Image src="/static/zenn.png" alt="Zenn" width={80} height={20} />
                </Link>
            </nav>
        </div>
    );
};
