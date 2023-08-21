import Image from "next/image";
import React from "react";

type PostImageFunc = (slug: string) => React.FC<JSX.IntrinsicElements["img"]>;

const PostImage: PostImageFunc = function (id) {
    return function PostImage({ src, alt, title }) {
        return <Image src={"/images/" + id + "/" + src} alt={alt || ""} title={title} height={500} width={500} />;
    };
};

export default PostImage;
