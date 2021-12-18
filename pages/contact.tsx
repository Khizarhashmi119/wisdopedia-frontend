import styles from "../styles/ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles["contact-page"]}>
      <p>You can follow us on</p>
      <div className={styles["social-links"]}>
        <a href="https://www.facebook.com/officialwisdopedia">
          <div className={styles["social-link"]}>
            <i className="fab fa-facebook-f"></i>
          </div>
        </a>
        <a href="https://www.instagram.com/officialwisdopedia">
          <div className={styles["social-link"]}>
            <i className="fab fa-instagram"></i>
          </div>
        </a>
        <a href="https://www.linkedin.com/company/wisdopedia">
          <div className={styles["social-link"]}>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </a>
      </div>
      <p>or you can leave a message (we will contact you after sometime)</p>
      <form className={styles["contact-form"]}>
        <input
          className={`${styles["contact-input"]} ${styles["contact-email"]}`}
          type="email"
          name="email"
          placeholder="Email*"
          required
        />
        <input
          className={`${styles["contact-input"]} ${styles["contact-subject"]}`}
          type="text"
          name="subject"
          placeholder="Subject*"
          required
        />
        <textarea
          className={`${styles["contact-input"]} ${styles["contact-message"]}`}
          name="message"
          rows={5}
          placeholder="Message*"
          required
        ></textarea>
        <input
          className={`${styles["contact-input"]} ${styles["contact-first-name"]}`}
          type="text"
          name="firstName"
          placeholder="First Name*"
          required
        />
        <input
          className={`${styles["contact-input"]} ${styles["contact-last-name"]}`}
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <input
          className={`${styles["contact-input"]} ${styles["contact-country"]}`}
          type="text"
          name="country"
          placeholder="Country*"
          required
        />
        <input
          className={`${styles["contact-input"]} ${styles["contact-city"]}`}
          type="text"
          name="city"
          placeholder="City"
        />
        <small>* required fields</small>
        <button
          className={`${styles["contact-input"]} ${styles["contact-send-btn"]}`}
          type="submit"
        >
          <i className="fas fa-paper-plane"></i> Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
