import { TBlog } from "../types/Blog";

import styles from "../styles/ShareButtons.module.css";

interface IProps {
  blog: TBlog;
  blogUrl: string;
}

const ShareButtons = ({ blog, blogUrl }: IProps) => {
  return (
    <div className={styles["share-btn-container"]}>
      <a
        href={`https://www.facebook.com/sharer.php?u=${blogUrl}`}
        className={styles["facebook-btn"]}
      >
        <i className={`fab fa-facebook ${styles["facebook"]}`}></i>
      </a>
      <a
        href={`https://twitter.com/share?url=${blogUrl}&text=${blog.title}`}
        className={styles["twitter-btn"]}
      >
        <i className={`fab fa-twitter ${styles["twitter"]}`}></i>
      </a>
      <a href="!#" className={styles["pinterest-btn"]}>
        <i className={`fab fa-pinterest ${styles["pinterest"]}`}></i>
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?url=${blogUrl}&title=${blog.title}`}
        className={styles["linkedin-btn"]}
      >
        <i className={`fab fa-linkedin ${styles["linkedin"]}`}></i>
      </a>
      <a
        href={`https://wa.me/?text=${blog.title} ${blogUrl}`}
        className={styles["whatsapp-btn"]}
      >
        <i className={`fab fa-whatsapp ${styles["whatsapp"]}`}></i>
      </a>
    </div>
  );
};

export default ShareButtons;

// Social Share Links:
// WhatsApp:
// https://wa.me/?text=[post-title] [post-url]
// Facebook:
// https://www.facebook.com/sharer.php?u=[post-url]
// Twitter:
// https://twitter.com/share?url=[post-url]&text=[post-title]
// Pinterest:
// https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
// LinkedIn:
// https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
