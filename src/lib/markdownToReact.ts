import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import { createElement, Fragment } from "react";
import Postimg from "@/components/PostImage";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeToc from "@jsdevtools/rehype-toc";

const markdownToReact = async (markdown: string, id: string) => {
    const result = (
        await unified()
            .use(remarkParse)
            .use(remarkGfm)
            .use(remarkRehype)
            .use(rehypePrism)
            .use(rehypeSlug)
            .use(rehypeToc, {
                headings: ["h2", "h3"],
                cssClasses: {
                    toc: "sm-toc",
                    link: "sm-toc-link",
                    listItem: "sm-toc-list-item",
                    list: "sm-toc-list",
                },
            })
            .use(rehypeReact, {
                createElement,
                Fragment,
                components: {
                    img: Postimg(id),
                },
            })
            .process(markdown)
    ).result;
    return result;
};

export default markdownToReact;
