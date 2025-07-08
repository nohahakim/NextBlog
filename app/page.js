import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";

export const metadata = {
  title: "Welcome to My Blog",
  description: "A blog about web development",
};

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts();
  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}
