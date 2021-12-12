/* eslint-disable @next/next/no-img-element */
import { CSSProperties, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

import styles from "../styles/Header.module.css";

const Header = (): JSX.Element => {
  const [isNavbarActive, setIsNavbarActive] = useState<boolean>(false);
  const { pathname } = useRouter();

  let headerStyle: CSSProperties;
  switch (pathname) {
    case "/":
      headerStyle = { backgroundImage: "url('/images/home.jpg')" };
      break;
    case "/blogs":
      headerStyle = { backgroundImage: "url('/images/blogs.jpg')" };
      break;
    case "/contact-us":
      headerStyle = { backgroundImage: "url('/images/contact-us.jpg')" };
      break;
    default:
      headerStyle = {};
  }

  const handleClickMenu = () => {
    setIsNavbarActive((prevState) => !prevState);
  };

  return (
    <header className={styles["header"]} style={headerStyle}>
      <nav className={styles["navbar"]}>
        <div className={styles["site-branding"]}>
          <img
            className={styles["site-logo"]}
            src="/images/wisdopedia.png"
            alt="wisdopedia"
          />
          <div className={styles["site-title-section"]}>
            <h1 className={styles["site-title"]}>
              <Link href="/" passHref>
                <a className={styles["nav-link"]}>Wisdopedia</a>
              </Link>
            </h1>
            <span className={styles["site-description"]}>
              a source of wisdom
            </span>
          </div>
        </div>
        <ul
          style={{
            display: isNavbarActive && "flex",
          }}
          className={styles["nav-links"]}
        >
          <li className={styles["nav-item"]}>
            <Link href="/">
              <a className={styles["nav-link"]}>Home</a>
            </Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/blogs" passHref>
              <a className={styles["nav-link"]}>Blogs</a>
            </Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/contact-us" passHref>
              <a className={styles["nav-link"]}>Contact Us</a>
            </Link>
          </li>
        </ul>
        <button className={styles["navbar-menu-btn"]} onClick={handleClickMenu}>
          Menu
        </button>
      </nav>
      {pathname === "/" && (
        <div
          className={styles["header-title-section"]}
          style={{ textAlign: "center" }}
        >
          <p className={styles["header-subtitle"]}>A source of wisdom.</p>
          <h2 className={styles["header-title"]}>WISDOPEDIA</h2>
          <Link href="/blogs" passHref>
            <a className={styles["header-title-link"]}>Go to blogs</a>
          </Link>
        </div>
      )}
      {pathname === "/blogs" && (
        <div className={styles["header-title-section"]}>
          <h2 className={styles["header-title"]}>BLOGS</h2>
        </div>
      )}
      {pathname === "/contact-us" && (
        <div className={styles["header-title-section"]}>
          <h2 className={styles["header-title"]}>CONTACT US</h2>
        </div>
      )}
    </header>
  );
};

export default Header;
