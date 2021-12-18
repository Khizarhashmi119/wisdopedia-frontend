import Comment from "./Comment";

import { TComment } from "../types/Comment";

import styles from "../styles/CommentList.module.css";

interface IProps {
  comments: TComment[];
}

const CommentList = ({ comments }: IProps): JSX.Element => {
  return (
    <div className={styles["comments"]}>
      {comments.length !== 0 ? (
        comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))
      ) : (
        <h2 className="message">No comment yet.</h2>
      )}
    </div>
  );
};

export default CommentList;
