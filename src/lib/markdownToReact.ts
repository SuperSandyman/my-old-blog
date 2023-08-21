import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import { createElement, Fragment } from "react";
import PostImage from "@/components/PostImage";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

const markdownToReact = async (markdown: string, id: string) => {
    const result = (
        await unified()
            .use(remarkParse)
            .use(remarkGfm)
            .use(remarkRehype)
            .use(rehypePrism)
            .use(rehypeReact, {
                createElement,
                Fragment,
                components: {
                    img: PostImage(id),
                },
            })
            .process(markdown)
    ).result;
    return result;
};

export default markdownToReact;
