import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";

export const metadata = {
  title: "All Posts",
  description: "A list of all programming-related tutorials and posts.",
};

export default async function AllPostsPage() {
  const allPosts = await getAllPosts();
  return (
    <>
      <AllPosts posts={allPosts} />
    </>
  );
}
