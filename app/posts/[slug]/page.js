import { getPostFiles, getPostData } from "@/lib/posts-util";
import PostContent from "@/components/posts/post-detail/post-content";

export async function generateStaticParams() {
  const postFiles = getPostFiles();
  return postFiles.map((file) => ({ slug: file.replace(/\.md$/, "") }));
}

export const revalidate = 600; // ISR: rebuild every 10 min

export default async function PostDetailPage({ params }) {
  const { slug } = await params;
  const postData = getPostData(slug);

  return <PostContent post={postData} />;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { title, excerpt } = getPostData(slug);
  return { title, description: excerpt ?? title };
}
