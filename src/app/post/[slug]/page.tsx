import { getAllPosts, getPostBySlug } from "@/utils/data";
import styles from "./detail.module.css";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function DetailPost({ params }: TParams) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  return (
    <main className={styles.main}>
      <div className={styles.post}>
        <h1>{post.title}</h1>
        <h6>{post.date}</h6>
        <Image width={500} height={300} src={post.image} alt="post image" />
        <p>{post.content}</p>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
