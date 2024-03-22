import Link from "next/link";
import styles from "./post.module.css";

export default function Post({ title, content, slug, date }: Tpost) {
  return (
    <main className={styles.main}>
      <Link href={`/post/${slug}`}>
        <div key={slug}>
          <h1>{title}</h1>
          <p>{date}</p>
          <p>{content}</p>
        </div>
      </Link>
    </main>
  );
}
