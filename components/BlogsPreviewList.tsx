import BlogPreview from "./BlogPreview";

import styles from "../styles/BlogsPreviewList.module.css";

import { Blog } from "../types/Blog";

interface Props {
  blogs: Blog[];
}

const BlogsPreviewList = ({ blogs }: Props) => {
  return (
    <div className={styles["blogs-preview-list"]}>
      {blogs.map((blog) => (
        <BlogPreview key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogsPreviewList;
