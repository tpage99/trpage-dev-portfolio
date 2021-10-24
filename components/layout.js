import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import Nav from "./nav"
import Footer from "./footer"
import ContactButton from "./contact-button"

const siteImg = "https://res.cloudinary.com/tpage99/image/upload/v1605625048/dev/trpage-logo.png"

export default function Layout({ children, home, title, siteDesc, keywords, canonicalURL }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="twitter:image:alt" content="tr page web developer logo. just a t and r squooshed together, nothing fancy."/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@TRPage_dev"/>
        <meta name="twitter:image" content={siteImg}/>
        <meta property="og:image" content={siteImg}/>
        <meta name="description" content={siteDesc} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={siteDesc}/>
        <meta property="og:url" content={canonicalURL}/>
        <meta property="og:site_name" content={title}/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={siteDesc}/>
        <link rel="canonical" href={canonicalURL} />
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
