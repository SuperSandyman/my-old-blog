import "../styles/globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import { Header } from "@/components/Header";

const noto = Noto_Sans_JP({
    weight: ["400", "700"],
    style: "normal",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body className={noto.className}>
                <header className="w-max-full shadow-sm bg-white bg-opacity-90 lg:sticky lg:top-0">
                    <Header />
                </header>
                <div>
                    <div className="container max-w-7xl mx-auto pb-4">
                        <main>{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}
