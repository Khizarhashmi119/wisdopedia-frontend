import { useRouter } from "next/router";

import styles from "../styles/BlogPreview.module.css";

import { Blog } from "../types/Blog";

interface Props {
  blog: Blog;
}

const BlogPreview = ({ blog }: Props) => {
  const { title, description, cover } = blog;
  const { push } = useRouter();

  return (
    <div className={styles["blog-preview"]} onClick={() => push(`/blogs`)}>
      <div
        className={styles["bg-img"]}
        style={{ backgroundImage: `url('${cover}')` }}
      ></div>
      <div className={styles["bg-transparent"]}></div>
      <div className={styles["blog-preview-body"]}>
        <h2 className={styles["blog-preview-title"]}>{title}</h2>
        <p className={styles["blog-preview-description"]}>
          {description.slice(0, 150)}
        </p>
      </div>
    </div>
  );
};

export default BlogPreview;
