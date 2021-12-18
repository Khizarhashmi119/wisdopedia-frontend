import { ChangeEvent, FormEvent, useState } from "react";
import gravatar from "gravatar";

import styles from "../styles/AddCommentForm.module.css";

interface IProps {
  blogId: string;
}

const AddCommentForm = ({ blogId }: IProps): JSX.Element => {
  const [commentFormData, setCommentFormData] = useState({
    name: "",
    email: "",
    text: "",
  });
  const { name, email, text } = commentFormData;

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCommentFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setCommentFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmitCommentForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const avatar = gravatar.url(
      email,
      {
        d: "mm",
        r: "pg",
        s: "200",
      },
      true
    );

    console.log(avatar);

    setCommentFormData({
      name: "",
      email: "",
      text: "",
    });
  };

  return (
    <form onSubmit={handleSubmitCommentForm}>
      <div className={styles["comment-form"]}>
        <textarea
          name="text"
          value={text}
          className={`${styles["comment-input"]} ${styles["comment-text"]}`}
          cols={5}
          placeholder="Comment*"
          onChange={handleChangeMessage}
          required
        ></textarea>
        <input
          type="text"
          name="name"
          value={name}
          className={styles["comment-input"]}
          placeholder="Name*"
          onChange={handleChangeInput}
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          className={styles["comment-input"]}
          placeholder="Email*"
          onChange={handleChangeInput}
          required
        />
        <small>* required fields</small>
      </div>
      <button className={styles["comment-send-btn"]} type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default AddCommentForm;
