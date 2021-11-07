import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import Link from "next/link";

const siteTitle = "TR Page | Success";
const siteDesc = "Successful submission page"
const site = "https://www.trpage.dev";
const keywords = "success"

export default function ContactSuccess() {
  const canonicalURL = site + useRouter().pathname;
  return (
    <Layout success title={siteTitle} siteDesc={siteDesc} keywords={keywords} canonicalURL={canonicalURL}>
      <Head>
        <meta name="robots" content="noindex"/>
      </Head>
      <section className="prose prose-xl md:prose-2xl border-b border-gray-300 mb-4 pb-4 text-center">
        <div>
          <h2 className="m-auto p-0 inline">
            You did it!
          </h2>
        </div>
        <p>Your form was successfully submitted and I will respond within two business days.</p>
        <p>Feel free to visit the <Link href="/"><a className="go-link">home page</a></Link> or read some more <Link href="/posts"><a className="go-link">blog posts</a></Link>. Thanks for reaching out! I look forward to working together.</p>
      </section>
    </Layout>
  );
}
