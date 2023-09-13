import { allPostsData } from "@/lib/api";

export const getFilteredPosts = (filterValue) => {
    const decodedValue = decodeURIComponent(filterValue);

    const filteredPosts = allPostsData.filter((post) => {
        return post.tags.includes(decodedValue);
    });

    return filteredPosts;
};

export const getFilteredPostsLength = (filterValue) => {
    return getFilteredPosts(filterValue).length;
};
