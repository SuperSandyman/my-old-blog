import React from "react";
import Image from "next/image";

type PostimgFunc = (slug: string) => React.FC<JSX.IntrinsicElements["img"]>;

const Postimg: PostimgFunc = function (id) {
    return function Postimg({ src, alt, title }) {
        return <Image src={"/images/" + id + "/" + src} alt={alt || ""} title={title} />;
    };
};

export default Postimg;
