import "../styles/globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Suspense } from "react";
import { GoogleAnalyticsScript } from "@/lib/gtag";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

const noto = Noto_Sans_JP({
    weight: ["400", "700"],
    style: "normal",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.sandyman.dev"),
    title: "Sandyマンのブログ",
    description: "JavaScriptやLinuxなどいろいろ記事書いてます",
    openGraph: {
        url: baseURL,
        title: "Sandyマンのブログ",
        description: "JavaScriptやLinuxなどいろいろ記事書いてます",
        type: "website",
        locale: "ja_JP",
        images: "opengraph-image.png",
    },
    twitter: {
        card: "summary_large_image",
        images: "opengraph-image.png",
        title: "Sandyマンのブログ",
        site: "@sandyman_blog",
        creator: "@sandyman_linux",
        description: "JavaScriptやLinuxなどいろいろ記事書いてます",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            {/* <head>
                <Script
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                /> */}
            {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
            {/* <Script
                    id="gtag-init"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_TRACKING_ID}', {
                                page_path: window.location.pathname,
                            });
                            `,
                    }}
                />
                <Suspense fallback={null}>
                    <GoogleAnalyticsScript />
                </Suspense>
            </head> */}
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
