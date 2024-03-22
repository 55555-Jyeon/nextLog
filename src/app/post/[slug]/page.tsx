import { getAllPosts, getPostBySlug } from "@/utils/data";
import styles from "./detail.module.css";
import { notFound } from "next/navigation";

type Tparams = {
  params: {
    slug: string;
  };
};

export default function DetailPost({ params }: Tparams) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className={styles.main}>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.content}</p>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
