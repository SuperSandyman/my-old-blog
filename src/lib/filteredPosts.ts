import { allPostsData } from "@/lib/api";

export const filteredPosts = (filterValue) => {
    const decodedValue = decodeURIComponent(filterValue);

    allPostsData.filter((post) => {
        return post.tags.includes(decodedValue);
    });
};
