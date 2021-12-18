/* eslint-disable @next/next/no-img-element */
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next/types";
import moment from "moment";

import AddCommentForm from "../../components/AddCommentForm";
import CommentList from "../../components/CommentList";
import BlogTags from "../../components/BlogTags";
import ShareButtons from "../../components/ShareButtons";

import { TBlog } from "../../types/Blog";

import styles from "../../styles/BlogDetailPage.module.css";

type TProps = InferGetStaticPropsType<typeof getStaticProps>;

const BlogDetailPage = ({ blog }: TProps): JSX.Element => {
  const blogUrl = "";

  return (
    <div className={styles["blog-detail-page"]}>
      <div className={styles["blog-content"]}>
        <img
          className={styles["blog-main-image"]}
          src={`${blog.cover}`}
          alt="blog-title"
        />
        <div className={styles["blog-info-container"]}>
          <div>
            <div className={styles["blog-date"]}>
              Date: {moment(blog.createdAt).format("MMMM Do YYYY")}
            </div>
            <div className={styles["blog-author-name"]}>By: {blog.author}</div>
          </div>
          <ShareButtons blog={blog} blogUrl={blogUrl} />
        </div>
        <div className={styles["blog-category-name"]}>
          Category: {blog.categories.map(({ name }) => name).join(", ")}
        </div>
        <h2 className={styles["blog-title"]}>{blog.title}</h2>
        <div className={styles["blog-body"]}>{blog.content}</div>
        <BlogTags tags={blog.tags} />
        <AddCommentForm blogId={blog._id} />
        {blog.comments.length ? (
          <CommentList comments={blog.comments} />
        ) : (
          <h2 className="message">No comment yet.</h2>
        )}
      </div>
      <div>
        <h3>Side section</h3>
      </div>
    </div>
  );
};

const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3001/blogs?_limit=1");
  const blogs: TBlog[] = await res.json();

  const paths = blogs.map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

const getStaticProps: GetStaticProps<{ blog: TBlog }, { slug: string }> =
  async (context) => {
    const {
      params: { slug },
    } = context;
    const res = await fetch(`http://localhost:3001/blogs?slug=${slug}`);
    const blogs: TBlog[] = await res.json();

    return {
      props: {
        blog: blogs[0],
      },
      revalidate: 10,
    };
  };

export { getStaticPaths, getStaticProps };
export default BlogDetailPage;
