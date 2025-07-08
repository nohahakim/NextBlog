import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";

export default async function AllPostsPage() {
  const allPosts = await getAllPosts();
  return (
    <>
      <AllPosts posts={allPosts} />
    </>
  );
}
