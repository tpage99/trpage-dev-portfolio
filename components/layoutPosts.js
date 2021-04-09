import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import Nav from "./nav"
import Footer from "./footer"
import ContactButton from "./contact-button"

export default function PostsLayout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <header>
        <Nav/>
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a className="hover:font-bold">← Back to home</a>
          </Link>
        </div>
      )}
      <ContactButton/>
      <Footer/>
    </div>
  );
}
