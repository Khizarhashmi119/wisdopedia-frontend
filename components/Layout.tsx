import { Fragment, ReactNode } from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <Head>
        <meta name="description" content="Your source of wisdom." />
        <meta
          name="p:domain_verify"
          content="eaec2571390bd8b2a52acf737007ba18"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          data-ad-client="ca-pub-3985346442893079"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <title>Wisdopedia - a source of wisdom</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
