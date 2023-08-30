import React from "react";

type PostimgFunc = (slug: string) => React.FC<JSX.IntrinsicElements["img"]>;

const Postimg: PostimgFunc = function (id) {
    return function Postimg({ src, alt, title }) {
        return <img src={"/images/" + id + "/" + src} alt={alt || ""} title={title} />;
    };
};

export default Postimg;
