import "../styles/globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { notEqual } from "assert";

const noto = Noto_Sans_JP({
    weight: ["400", "700"],
    style: "normal",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Sandyマンのブログ",
    description: "JavaScriptやLinuxなどいろいろ記事書いてます",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body className={noto.className}>
                <div className="flex flex-col min-h-screen">
                    <header className="w-max-full shadow-sm bg-white bg-opacity-90 lg:sticky lg:top-0">
                        <Header />
                    </header>
                    <div className="container max-w-7xl mx-auto pb-4">
                        <main className="px-4">{children}</main>
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
