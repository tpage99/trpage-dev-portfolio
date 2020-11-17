import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="">
        <h1 className="text-3xl md:text-6xl font-bold md:font-extrabold mb-0">{postData.title}</h1>
        <div  className="text-2xl text-gray-700 mt-0" >
          <Date dateString={postData.date}/>
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className="prose prose-lg md:prose-2xl" />
      </article>
      <article className="text-center my-2 py-6">
        <Link href="/posts">
          <a className="btn-outline text-2xl">← Back to Blog Posts</a>
        </Link>
      </article>
    </Layout>
  );
}
