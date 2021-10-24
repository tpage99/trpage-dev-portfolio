import { useRouter } from "next/router";
import Layout from "../components/layout";

const siteTitle = "TR Page | The Pages Media";
const siteDesc = "What The Pages Media, LLC is to TR Page's website design and development business."
const site = "https://www.trpage.dev";
const keywords = "website design business, website development business, freelance web developer, shopify expert"

export default function TPM() {
  const canonicalURL = site + useRouter().pathname;
  return (
    <Layout thePagesMedia title={siteTitle} siteDesc={siteDesc} keywords={keywords} canonicalURL={canonicalURL}>
      <section className="prose prose-xl md:prose-2xl">
        <h1 className="text-3xl md:text-5xl text-center">The Pages Media, LLC</h1>
        <p>The Pages Media, LLC is the official company for Taylor Page's website design and development and related services.</p>
        <p>W-9 and EIN provided upon request for active contracts.</p>
      </section>
    </Layout>
  );
}
