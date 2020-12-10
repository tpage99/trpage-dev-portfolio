import Head from "next/head";
import Link from "next/link";
import PostsLayout from "../../components/layoutPosts";
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
    <PostsLayout>
      <Head>
        <title>{postData.title}</title>
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.desc}/>
        <meta property="og:url" content={"https://www.trpage.dev/posts/"+postData.id}/>
        <meta property="og:site_name" content="TR Page | Web Developer"/>
        <meta property="og:image" content={postData.coverImg} />
        <meta name="twitter:title" content={postData.title}/>
        <meta name="twitter:description" content={postData.desc}/>
        <meta name="twitter:image" content={postData.coverImg}/>
        <meta name="twitter:image:alt" content={postData.coverDesc}/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@taylorpage71"/>
      </Head>
      <article className="">
        <h1 className="text-3xl md:text-6xl font-bold md:font-extrabold mb-0">{postData.title}</h1>
        <div  className="text-2xl text-gray-700 mt-0" >
          <Date dateString={postData.date}/>
        </div>
        <div className="py-8">
          <img src={postData.coverImg} alt={postData.coverDesc} className="rounded-xl shadow-lg"/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className="prose prose-lg md:prose-2xl pt-6" />
      </article>
      <article className="text-center my-2 py-6">
        <Link href="/posts">
          <a className="btn-outline text-2xl">← Back to Blog Posts</a>
        </Link>
      </article>
    </PostsLayout>
  );
}
