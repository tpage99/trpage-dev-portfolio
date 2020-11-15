import Link from 'next/link'

export default function Featured() {
  return (
    <section>
      <article className="m-4 p-4">
        <h2 className="text-2xl font-semibold">Hive of the Ozarks</h2>
        <Link href="/posts/hive-of-the-ozarks">
          <a className="text-lg hover:underline">Learn more about this project</a>
        </Link>
      </article>
      <article className="m-4 p-4">
        <h2 className="text-2xl font-semibold">Local 417 Eats</h2>
        <Link href="/posts/local-417-eats">
          <a className="text-lg hover:underline">Learn more about this project</a>
        </Link>
      </article>
      <article className="m-4 p-4">
        <h2 className="text-2xl font-semibold">WC Partners</h2>
        <Link href="/posts/wc-partners">
          <a className="text-lg hover:underline">Learn more about this project</a>
        </Link>
      </article>
      <article className="m-4 p-4">
        <h2 className="text-2xl font-semibold">Coffee First</h2>
        <Link href="/posts/coffee-first">
          <a className="text-lg hover:underline">Learn more about this project</a>
        </Link>
      </article> 
    </section>
  )
}
