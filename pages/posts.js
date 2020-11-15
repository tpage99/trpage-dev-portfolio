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
          {allPostsData.map(({ id, date, title }) => (
            <div>
              <li className="my-2 py-4 border-b border-gray-300" key={id} >
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a className="text-2xl underline font-semibold my-2 py-4">{title}</a>
                </Link>
                <br />
                <small className="text-lg text-gray-700">
                  <Date dateString={date} />
                </small>
              </li>
            </div>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
