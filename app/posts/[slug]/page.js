export function generateMetadata({ params }) {
  const { slug } = params;
  return {
    title: `Post: ${slug}`,
    description: `Details for post ${slug}`,
  };
}

export default function PostDetailPage({ params }) {
  const { slug } = params;
  return <h1>Post Detail for {slug}</h1>;
}
