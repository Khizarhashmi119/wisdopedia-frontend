import { GetStaticProps, InferGetStaticPropsType } from "next/types";

import BlogsPreviewList from "../components/BlogsPreviewList";
import Quote from "../components/Quote";

import styles from "../styles/Home.module.css";

import { Blog } from "../types/Blog";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home = ({ blogs }: Props): JSX.Element => {
  return (
    <div className={styles["home-page"]}>
      <div className={styles["home-page-blogs-preview-section"]}>
        <h3 className={styles["blogs-preview-section-title"]}>Recent blogs</h3>
        {blogs.length ? (
          <BlogsPreviewList blogs={blogs.filter((blog, index) => index <= 2)} />
        ) : (
          <h2 className="message">No blog yet.</h2>
        )}
      </div>
      <div className={styles["quote-section"]}>
        <h3 className={styles["quote-section-title"]}>
          Inspiring quote of the day
        </h3>
        <Quote />
      </div>
    </div>
  );
};

const getStaticProps: GetStaticProps<{ blogs: Blog[] }> = async () => {
  const res = await fetch("http://localhost:3001/blogs");
  const blogs: Blog[] = await res.json();

  return {
    props: {
      blogs,
    },
    revalidate: 10,
  };
};

export { getStaticProps };
export default Home;
