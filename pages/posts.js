import { useRouter } from "next/router";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const siteTitle = "TR Page | Blog Posts";
const siteDesc = "Blog posts by Web developer and Shopify Expert TR Page. Projects, case studies, and helpful information on how to improve your Shopify store so you can reach more customers."
const site = "https://www.trpage.dev";
const keywords = "shopify, theme customization, conversion rate, speed optimization, tutorial, technique, seo, search engine optimization, technical seo, core web vitals"

export default function Blog({ allPostsData }) {
  const canonicalURL = site + useRouter().pathname;
  return (
    <Layout blog title={siteTitle} siteDesc={siteDesc} keywords={keywords} canonicalURL={canonicalURL}>
      <section>
        <h1 className="text-3xl md:text-5xl text-center underline font-bold">Blog Posts</h1>
        <ul>
          {allPostsData.map(({ id, date, title, desc }) => (
            <div>
              <li className="my-2 py-4 border-b border-gray-300" key={id} >
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a className="text-2xl underline font-semibold my-2 py-4">{title}</a>
                </Link>
                <p className="text-md text-gray-700">
                  <Date dateString={date} />
                </p>
                <p className="text-lg text-gray-700 py-4">{desc}</p>
              </li>
            </div>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
