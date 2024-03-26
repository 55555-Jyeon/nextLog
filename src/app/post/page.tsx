import styles from "./post.module.css";
import { getAllPosts } from "@/utils/data";
import OnePost from "./_components/post";

export default function Post() {
  const allPosts = getAllPosts();
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {allPosts.map((post: TPostProps) => (
          <OnePost key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}
