import { posts } from "./consts/data";
import styles from "./page.module.css";
import Post from "./post/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {posts.map((post: Tpost) => (
          <Post key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}
