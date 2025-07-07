import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
export const metadata = {
  title: "Welcome to My Blog",
  description: "A blog about web development",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <FeaturedPosts /> */}
    </>
  );
}
