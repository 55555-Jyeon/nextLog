import styles from "./post.module.css";
import Link from "next/link";
import Image from "next/image";

export default function OnePost({
  title,
  summary,
  image,
  slug,
  date,
}: TPostProps) {
  return (
    <main className={styles.main}>
      <Link href={`/post/${slug}`}>
        <div className={styles.post} key={slug}>
          <h1>{title}</h1>
          <div className={styles.imageContainer}>
            <Image width={360} height={200} src={image} alt="post image" />
          </div>
          <h5>{summary}</h5>
          <h6>{date}</h6>
        </div>
      </Link>
    </main>
  );
}
