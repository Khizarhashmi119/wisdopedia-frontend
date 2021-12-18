import BlogPreview from "./BlogPreview";

import styles from "../styles/BlogsPreviewList.module.css";

import { TBlog } from "../types/Blog";

interface IProps {
  blogs: TBlog[];
}

const BlogsPreviewList = ({ blogs }: IProps) => {
  return (
    <div className={styles["blogs-preview-list"]}>
      {blogs.map((blog) => (
        <BlogPreview key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogsPreviewList;
