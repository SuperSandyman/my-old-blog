"use client";

import { useEffect } from "react";
import tocbot from "tocbot";

export const Toc = () => {
    useEffect(() => {
        tocbot.init({
            tocSelector: ".toc",
            contentSelector: ".prose",
            headingSelector: "h2, h3",
        });
        return () => tocbot.destroy();
    }, []);

    return (
        <>
            <div className="toc pt-4"></div>{" "}
            <style jsx global>{`
                .toc {
                    border-radius: 0.25rem;
                    padding: 1rem;
                    font-size: 1rem;
                }

                .toc-list .toc-list {
                    padding-left: 1rem;
                    padding-top: 0.5rem;
                }

                .toc-list-item {
                    padding-bottom: 0.5rem;
                }

                .toc-list-item:last-child {
                    padding-bottom: 0;
                }

                .toc-link {
                    color: #282828;
                    font-weight: 700;
                }
            `}</style>
        </>
    );
};
