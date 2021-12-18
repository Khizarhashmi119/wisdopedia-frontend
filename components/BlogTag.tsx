import styles from "../styles/BlogTag.module.css";

interface IProps {
  tag: string;
}

const BlogTag = ({ tag }: IProps): JSX.Element => {
  return <span className={styles["blog-tag"]}>#{tag}</span>;
};

export default BlogTag;
