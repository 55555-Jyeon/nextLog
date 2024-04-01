import { getAllPosts, getPostBySlug } from "@/utils/data";
import styles from "./detail.module.css";
import markdownStyles from "./markdown-styles.module.css";
import { notFound } from "next/navigation";
import Image from "next/image";
import markdownToHtml from "@/utils/markdownToHtml";
import Link from "next/link";

export async function generateMetadata({ params }: TParams): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  return {
    title: `post | ${params.slug}`,
    desc: post.summary,
  };
}

export default async function DetailPost({ params }: TParams) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  if (!post) return notFound();

  return (
    <main className={styles.main}>
      <div className={styles.post}>
        <h1>{post.title}</h1>
        <h6>{post.date}</h6>
        <Image width={500} height={300} src={post.image} alt="post image" />
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Link href={post.links}>
          <Image
            width={30}
            height={30}
            src={"/icons/velog.png"}
            alt="velog icon"
          />
          <p>더 자세한 정보는 벨로그 게시글을 통해 확인할 수 있습니다. 🙂</p>
        </Link>
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
