import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function TPM() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="prose prose-xl md:prose-2xl">
        <h1 className="text-3xl md:text-5xl text-center">The Pages Media, LLC</h1>
        <p>The Pages Media, LLC is the official company for Taylor Page's website design and development and related services.</p>
        <p>W-9 and EIN provided upon request for active contracts.</p>
      </section>
    </Layout>
  );
}
