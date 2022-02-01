import { useRouter } from "next/router";
import Layout from "../components/layout";

const siteTitle = "TR Page | Accessibility Statement";
const siteDesc = "Accessibility statement for TR Page portfolio website"
const site = "https://www.trpage.dev";

export default function A11y() {
  const canonicalURL = site + useRouter().pathname;
  return (
    <Layout A11y title={siteTitle} siteDesc={siteDesc} canonicalURL={canonicalURL}>
      <section className="prose prose-xl md:prose-2xl">
        <h1 className="text-3xl md:text-5xl text-center">Accessibility Statement</h1>
        <p>I am committed to making this website's content accessible and user-friendly for everyone.</p> 
        <p>If you are having difficulty viewing or navigating the content on this website, or notice any content, feature, or functionality that you believe is not fully accessible to people with disabilities, please contact me at <a href="mailto:taylor@thepagesmedia.com">taylor@thepagesmedia.com</a> and let me know what is not fully accessible or a suggestion for improvement.</p>
        <p>I take your feedback seriously and will work to accommodate all users with a reasonable request for a more accessible website.</p>
      </section>
    </Layout>
  );
}
