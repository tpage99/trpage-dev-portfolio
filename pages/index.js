import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Featured from "../components/featured"
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
      <section className="prose prose-xl md:prose-2xl border-b border-gray-300 mb-4 pb-4">
        <img
            src="/images/taylor-photo.jpg"
            className="inline h-36 md:h-64 w-auto mb-0 pb-0 px-4"
            alt="taylor sitting in a chair"
          />
          <h2 className="m-0 p-0 inline">
          Hi, I'm TR (taylor)!
        </h2>
        <p>I'm a freelance web developer living in the Springfield, MO USA area (CST or UTC−06:00 timezone). My primary toolkit consists of React frameworks like Gatsby.js and Next.js. Because most of my projects as of late have been on Shopify, I'm also picking up more Ruby on Rails and Vue.js.</p>
        <p>In addition to the tools I'm regularly familiar with, I have an affinity for the JAMstack, a set of technologies used to build websites in a way that boasts enhanced security, flexibility, and speed over traditional websites. I'm also a big advocate of learning about and finding ways to implement accessibility to web development. I'm most interested in working with projects with a cause.</p>
        <p>Feel free to check out some of my work below. If you have any questions or think I could be helpful in your next project, please reach to out me through my email at <a href="mailto:taylor@thepagesmedia.com" className="go-link">taylor@thepagesmedia.com</a> or one of the <a href="https://www.trpage.dev" className="go-link">social links above</a>.</p>
      </section>
      <Featured/>
      <Reviews/>
    </Layout>
  );
}
