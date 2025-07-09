// components/post-content.jsx
import PostHeader from "./post-header";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";

// ⬇️  Use the “light” build of Prism instead of the full bundle
import PrismLight from "react-syntax-highlighter/dist/cjs/prism-light";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

// 📌  Register only the languages you actually need
PrismLight.registerLanguage("js", js);
PrismLight.registerLanguage("css", css);

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const mdComponents = {
    // 🖼️  Markdown images ➜ <Image>
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
              priority
            />
          </div>
        );
      }
      return <p>{children}</p>;
    },

    // 💡  Code blocks ➜ PrismLight
    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const language = match?.[1];

      return !inline && language ? (
        <PrismLight
          style={atomDark}
          language={language}
          PreTag="div" // avoids an extra <pre>
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </PrismLight>
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
