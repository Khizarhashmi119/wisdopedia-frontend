/* eslint-disable @next/next/no-img-element */
import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-top"]}>
        <div className={styles["container"]}>
          <div className={styles["footer-top-cols"]}>
            <h4>Important links</h4>
            <ul className={styles["footer-links"]}>
              <li>
                <Link href="/" passHref>
                  <a className={styles["footer-link"]}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs" passHref>
                  <a className={styles["footer-link"]}>Blogs</a>
                </Link>
              </li>
              <li>
                <Link href="/contact-us" passHref>
                  <a className={styles["footer-link"]}>Contact us</a>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`${styles["footer-top-cols"]} ${styles["footer-top-col-2"]}`}
          >
            <img
              className={styles["footer-site-logo"]}
              src="/images/wisdopedia.png"
              alt="wisdopedia"
            />
            <h3 className={styles["footer-site-branding"]}>Wisdopedia</h3>
            <span>Follow us on.</span>
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
          </div>
          <div
            className={`${styles["footer-top-cols"]} ${styles["footer-top-col-3"]}`}
          >
            <h4>Subscribe our news letter.</h4>
            <form onSubmit={handleSubmit}>
              <input
                id="email"
                className={styles["subscribe-email-input"]}
                type="text"
                name="email"
                value={email}
                placeholder="Your email address."
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className={styles["subscribe-button"]} type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles["footer-bottom"]}>
        <div className={styles["container"]}>
          <div className={styles["footer-text"]}>
            <p>Copyright &copy; {currentYear} Wisdopedia</p>
          </div>
          <div className={styles["footer-text"]}>
            <p>Powered by Wisdopedia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
