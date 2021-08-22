import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Accomplishments from "../components/accomplishments"
import Featured from "../components/featured"
import BlogPromo from "../components/blogPromo"
import Reviews from "../components/reviews"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Accomplishments/>
        <section className="prose prose-xl md:prose-2xl border-b border-gray-300 mb-4 pb-4">

        <p>I'm a freelance web developer and <Link href="/posts/what-is-a-shopify-partner"><a className="go-link">Shopify Partner</a></Link> living in the Springfield, MO USA area (CST or UTC−06:00 timezone). I help store owners get online. Whether it's building a brand new Shopify store to bring your brick and mortar store or new idea online, or just updating an existing site to the year {new Date().getFullYear()}, I can help. My goal is to teach and support in addition to providing code that works consistently and provides you a platform to sell your products or services online.</p>

        <p>In addition to building custom Shopify sites, I have an affinity for the <a href="https://jamstack.org/what-is-jamstack/" className="go-link">Jamstack</a>, a set of technologies used to build websites in a way that boasts enhanced security, flexibility, and speed over traditional websites. I'm also a big advocate of learning about and finding ways to implement accessibility to web development.</p>

        <p>Feel free to check out some of my work below. If you have any questions or think I could be helpful in your next project, please reach to out me through my email at <a href="mailto:taylor@thepagesmedia.com" className="go-link">taylor@thepagesmedia.com</a> or complete a <Link href="/contact"><a className="go-link">short contact form</a></Link>.</p>
      </section>
      <BlogPromo/>
      <Featured/>
      <Reviews/>
    </Layout>
  );
}
