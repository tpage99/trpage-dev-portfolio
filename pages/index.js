import Head from "next/head";
import Link from "next/link";

import Nav from "../components/nav";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Home Page Yo</title>
      </Head>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center">Next.js + Tailwind CSS</h1>
        <p className="text-center text-xl">
          First post page{" "}
          <Link href="/posts/first-post">
            <a className="underline">here!</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
