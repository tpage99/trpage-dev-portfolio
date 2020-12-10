import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
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

export default function Blog({ allPostsData }) {
  return (
    <Layout blog>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
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
