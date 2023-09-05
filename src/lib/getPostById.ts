import { allPostsData } from "./api";

export const getPostById = (id: string) => {
    return allPostsData.find((post) => post.id === id);
};
