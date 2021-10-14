import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./layout.module.css";
import Link from "next/link";
import Nav from "./nav"
import Footer from "./footer"
import ContactButton from "./contact-button"

export const siteTitle = "TR Page | Web Developer";
export const siteImg = "https://res.cloudinary.com/tpage99/image/upload/v1605625048/dev/trpage-logo.png"
export const siteDesc = "Web Developer portfolio site for TR Page."
export const site = "https://www.trpage.dev";

export default function Layout({ children, home }) {
  const canonicalURL = site + useRouter().pathname;
  return (
    <div className={styles.container}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="canonical" href={canonicalURL} />
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="description" content={siteDesc} />
        <meta property="og:image" content={siteImg}/>
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDesc}/>
        <meta property="og:url" content="https://www.trpage.dev"/>
        <meta property="og:site_name" content={siteTitle}/>
        <meta name="twitter:title" content={siteTitle}/>
        <meta name="twitter:description" content={siteDesc}/>
        <meta name="twitter:image" content={siteImg}/>
        <meta name="twitter:image:alt" content="tr page web developer logo. just a t and r squooshed together, nothing fancy."/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@TRPage_dev"/>
      </Head>
      <header>
        <Nav/>
      </header>
      <main>{children}</main>
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
