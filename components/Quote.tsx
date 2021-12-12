/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

import styles from "../styles/Quote.module.css";

const Quote = () => {
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://quotes.rest/qod.json?category=inspire");
      const data = await res.json();
      setQuoteData(data);
    })();
  }, []);

  return (
    <div
      className={styles["quote-block"]}
      style={{
        backgroundImage: `url(${
          quoteData && quoteData.contents.quotes[0].background
        })`,
      }}
    >
      <div className={styles["bg-transparent"]}></div>
      {quoteData ? (
        <div className={styles["quote-body"]}>
          <i className="fas fa-quote-right fa-2x"></i>
          <p className={styles["quote"]}>
            {quoteData.contents.quotes[0].quote}
          </p>
          <span className={styles["quote-author"]}>
            By : {quoteData.contents.quotes[0].author}
          </span>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: "0.9em",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: "1rem",
              zIndex: 50,
            }}
          >
            <img
              src="https://theysaidso.com/branding/theysaidso.png"
              height="20"
              width="20"
              alt="theysaidso.com"
            />
            <a
              href="https://theysaidso.com"
              title="Powered by quotes from theysaidso.com"
              style={{
                color: "#ccc",
                marginLeft: "4px",
                verticalAlign: "middle",
              }}
            >
              They Said So®
            </a>
          </div>
        </div>
      ) : (
        <h4 className="loading-text">Loading...</h4>
      )}
    </div>
  );
};

export default Quote;
