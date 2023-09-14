import "../styles/globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Suspense } from "react";
import { GoogleAnalyticsScript } from "@/lib/gtag";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const noto = Noto_Sans_JP({
    weight: ["400", "700"],
    style: "normal",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(baseURL ?? "http://localhost:3000"),
    title: "Sandyマンのブログ",
    description: "JavaScriptやLinuxなどいろいろ記事書いてます",
    openGraph: {
        url: baseURL,
        title: "Sandyマンのブログ",
        description: "JavaScriptやLinuxなどいろいろ記事書いてます",
        type: "website",
        locale: "ja_JP",
        images: "/opengraph-image.png",
    },
    twitter: {
        card: "summary_large_image",
        images: "/opengraph-image.png",
        title: "Sandyマンのブログ",
        site: "@sandyman_blog",
        creator: "@sandyman_linux",
        description: "JavaScriptやLinuxなどいろいろ記事書いてます",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <head>
                <Suspense fallback={null}>
                    <GoogleAnalyticsScript />
                </Suspense>
            </head>
            <body className={noto.className}>
                <div className="flex flex-col min-h-screen">
                    <header className="w-max-full shadow-sm bg-white">
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
