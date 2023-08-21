import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostData } from "@/types/PostDate";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getSortedPostsData(): PostData[] {
    const directoryNames = fs.readdirSync(postsDirectory);
    const allPostsData: PostData[] = directoryNames.map((directoryName) => {
        const id = directoryName;
        const fullPath = path.join(postsDirectory, directoryName, "index.md");
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
            content: matterResult.content,
        } as PostData;
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export const allPostsData = getSortedPostsData();
