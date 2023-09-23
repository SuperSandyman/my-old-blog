"use client";

import { useEffect } from "react";
import tocbot from "tocbot";

import "@/styles/toc.css";

export const Toc = () => {
    useEffect(() => {
        tocbot.init({
            tocSelector: ".toc",
            contentSelector: ".prose",
            headingSelector: "h2, h3",
        });
        return () => tocbot.destroy();
    }, []);

    return <div className="toc pt-4"></div>;
};
