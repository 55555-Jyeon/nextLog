import styles from "./onePost.module.css";
import Link from "next/link";
import Image from "next/image";
import { TPostProps } from "@/types/props";

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
