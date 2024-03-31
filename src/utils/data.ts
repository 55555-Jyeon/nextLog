import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

// posts directory 가져오기("posts" 디렉토리의 경로)
const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content, summary: data.summary } as TPost;
}

export function getAllPosts(): TPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((prevPost, nextPost) => (prevPost.date > nextPost.date ? -1 : 1));
  return posts;
}
