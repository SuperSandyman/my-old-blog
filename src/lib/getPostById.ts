import { getSortedPostsData } from "./api";

const allPostsData = getSortedPostsData();

export const getPostById = (id: string) => {
    return allPostsData.find((post) => post.id === id);
};
