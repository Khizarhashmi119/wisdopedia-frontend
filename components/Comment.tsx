/* eslint-disable @next/next/no-img-element */
import moment from "moment";

import { TComment } from "../types/Comment";

import styles from "../styles/Comment.module.css";

interface IProps {
  comment: TComment;
}

const Comment = ({ comment }: IProps) => {
  const { name, text, createdAt } = comment;

  return (
    <div className={styles["comment"]}>
      <div className={styles["comment-profile-image-container"]}>
        <img
          className={styles["comment-profile-image"]}
          src={``}
          alt="profile"
        />
      </div>
      <div className={styles["comment-content"]}>
        <h4 className={styles["comment-profile-name"]}>Name: {name}</h4>
        <p className={styles["comment-text"]}>{text}</p>
        <small>Date: {moment(createdAt).format("MMMM Do YYYY, h:mm a")}</small>
      </div>
    </div>
  );
};

export default Comment;
