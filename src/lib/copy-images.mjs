import fs from "fs";
import path from "path";
import fsExtra from "fs-extra";

const fsPromises = fs.promises;
const targetDir = "./public/images";
const postsDir = "./content/posts";

async function copyimgsToPublic(images, slug) {
    for (const image of images) {
        await fsPromises.copyFile(`${postsDir}/${slug}/${image}`, `${targetDir}/${slug}/${image}`);
    }
}

async function createPostimgFoldersForCopy() {
    // Get every post folder: post-one, post-two etc.
    const postSlugs = await fsPromises.readdir(postsDir);

    for (const slug of postSlugs) {
        const allowedimgFileExtensions = [".png", ".jpg", ".jpeg", ".gif", ".webp"];

        // Read all files inside current post folder
        const postDirFiles = await fsPromises.readdir(`${postsDir}/${slug}`);

        // Filter out files with allowed file extension (images)
        const images = postDirFiles.filter((file) => allowedimgFileExtensions.includes(path.extname(file)));

        if (images.length) {
            // Create a folder for images of this post inside public
            await fsPromises.mkdir(`${targetDir}/${slug}`);

            await copyimgsToPublic(images, slug);
        }
    }
}

await fsExtra.emptyDir(targetDir);
await createPostimgFoldersForCopy();
