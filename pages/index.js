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

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="prose prose-xl md:prose-2xl">
        <p>
          I'm Taylor. A social worker who taught himself how to code using online resources and the occasional online
          bootcamp. Here be some blog stuff from the intro to Next.js tutorial...
        </p>
      </section>
      <hr className="my-2 py-4" />
      <section>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="my-2 py-4" key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a className="text-2xl text-blue-500 font-semibold my-2 py-4">{title}</a>
              </Link>
              <br />
              <small className="text-lg text-gray-700">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
