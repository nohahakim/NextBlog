import PostHeader from "./post-header";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const mdComponents = {
    // react-markdown ≥ 6 uses real tag names
    p({ node, children }) {
      const first = node.children?.[0];
      if (first?.tagName === "img") {
        const { src, alt } = first.properties;
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${src}`}
              alt={alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{children}</p>;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={mdComponents}>{post.content}</ReactMarkdown>
    </article>
  );
}
