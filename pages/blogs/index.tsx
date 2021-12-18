import { ChangeEvent, useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";

import BlogsPreviewList from "../../components/BlogsPreviewList";

import { TBlog } from "../../types/Blog";

import styles from "../../styles/BlogsPage.module.css";

type TProps = InferGetStaticPropsType<typeof getStaticProps>;

const BlogsPage = ({ blogs }: TProps): JSX.Element => {
  const [searchField, setSearchField] = useState("");

  let filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchField.toLowerCase())
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setSearchField(value);
  };

  return (
    <div className={styles["blogs-page-blogs-preview-section"]}>
      <p className={styles["blogs-preview-section-title"]}>
        Readers are leaders.
      </p>
      <input
        type="search"
        className={styles["search-blog"]}
        placeholder="Search"
        value={searchField}
        onChange={handleChange}
      />
      {blogs.length ? (
        <BlogsPreviewList blogs={filteredBlogs} />
      ) : (
        <h2 className="message">No blog yet.</h2>
      )}
    </div>
  );
};

const getStaticProps: GetStaticProps<{ blogs: TBlog[] }> = async () => {
  const res = await fetch("http://localhost:3001/blogs");
  const blogs: TBlog[] = await res.json();

  return {
    props: {
      blogs,
    },
    revalidate: 10,
  };
};

export { getStaticProps };
export default BlogsPage;
