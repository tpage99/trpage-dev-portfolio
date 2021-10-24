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
      <section className="prose prose-xl md:prose-2xl border-b border-gray-300 mb-4 pb-4">
          <h2 className="m-0 p-0 inline">
          You did it!
        </h2>
        <p>Your form was successfully submitted and I will respond within two business days. Feel free to visit the <Link href="/"><a className="go-link">home page</a></Link> or read some more <Link href="/posts"><a className="go-link">blog posts</a></Link>. Thanks for reaching out! I look forward to working together.</p>
      </section>
    </Layout>
  );
}
