import PostHeader from "./post-header";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const mdComponents = {
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
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]} // js, ts, css, …
          PreTag="div" // prevents extra <pre>
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={mdComponents}>{post.content}</ReactMarkdown>
    </article>
  );
}
