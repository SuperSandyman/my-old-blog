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

    return <div className="toc lg:sticky lg:top-0 pt-4"></div>;
};
