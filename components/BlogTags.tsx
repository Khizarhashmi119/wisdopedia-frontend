import BlogTag from "./BlogTag";

import styles from "../styles/BlogTags.module.css";

interface Props {
  tags: string[];
}

const BlogTags = ({ tags }: Props) => {
  return (
    <div className={styles["blog-tags"]}>
      {tags.map((tag, idx) => (
        <BlogTag key={idx} tag={tag} />
      ))}
    </div>
  );
};

export default BlogTags;
