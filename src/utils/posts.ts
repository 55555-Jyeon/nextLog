import fs from "fs";
import path from "path";
import matter from "gray-matter";

// posts directory 가져오기("posts" 디렉토리의 경로)
const postsDirectory = path.join(process.cwd(), "posts");

export default function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // fileName을 id에 저장
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  // date를 내림차순으로 정렬(sort)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
