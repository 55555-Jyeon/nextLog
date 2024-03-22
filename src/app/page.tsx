import { getAllPosts } from "@/utils/data";
import styles from "./page.module.css";
import Post from "./post/page";
import { TPostProps } from "@/type/props";

export default function Home() {
  const allPosts = getAllPosts();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {allPosts.map((post: TPostProps) => (
          <Post key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}
