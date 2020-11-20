import Link from 'next/link'

export default function Featured() {
  return (
    <section className="prose prose-xl text-center">
      <h2 className="text-center md:pl-48">previous projects</h2>
      <article className="md:text-left md:pl-24">
        <h3>Hive of the Ozarks</h3>
        <Link href="/posts/hive-of-the-ozarks">
          <a className="text-lg hover:underline">Learn more about this project</a>
        </Link>
      </article>
      <article className="md:text-right md:pl-60">
        <h3>Local 417 Eats</h3>
        <Link href="/posts/local-417-eats">
          <a className="text-lg hover:underline">Learn more about this project</a>
        </Link>
      </article>
      <article className="md:text-left md:pl-24">
        <h3>WC Partners</h3>
        <Link href="/posts/wc-partners">
          <a className="text-lg hover:underline">Learn more about this project</a>
        </Link>
      </article>
      <article className="md:text-right">
        <h3>Coffee First</h3>
        <Link href="/posts/coffee-first">
          <a className="text-lg hover:underline">Learn more about this project</a>
        </Link>
      </article>
      <article className="text-center my-2 py-12 md:pl-48">
      <Link href="/posts">
        <a className="btn-outline text-2xl no-underline">Blog Posts →</a>
      </Link>
      </article> 
    </section>
  )
}
