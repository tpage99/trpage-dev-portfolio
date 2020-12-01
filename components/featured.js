import Link from 'next/link'

export default function Featured() {
  return (
    <section className="text-center">
      <h2 className="text-4xl font-bold">previous projects</h2>
      <article className="p-4">
        <h3 className="text-3xl font-bold text-gray-700">Hive of the Ozarks</h3>
        <div className="py-4">
        <img src="/images/hiveoftheozarks.jpg" alt="screenshot of hive of the ozarks" className="rounded-xl shadow-lg feature-img" loading="lazy"/>
        </div>
        <Link href="/posts/hive-of-the-ozarks">
          <a className="text-2xl underline go-link">
            Learn more about this project
          </a>
        </Link>
      </article>
      <article className="p-4">
        <h3 className="text-3xl font-bold text-gray-700">Local 417 Eats</h3>
        <div className="py-4">
        <img src="/images/local417eats.jpg" alt="screenshot of local 417 eats" className="rounded-xl shadow-lg feature-img" loading="lazy"/>
        </div>
        <Link href="/posts/local-417-eats">
          <a className="text-2xl underline go-link">
            Learn more about this project
          </a>
        </Link>
      </article>
      <article className="p-4">
        <h3 className="text-3xl font-bold text-gray-700">WC Partners</h3>
        <div className="py-4">
        <img src="/images/wcpartners.jpg" alt="screenshot of wc partners" className="rounded-xl shadow-lg feature-img" loading="lazy"/>
        </div>
        <Link href="/posts/wc-partners">
          <a className="text-2xl underline go-link">Learn more about this project</a>
        </Link>
      </article>
      <article className="p-4">
        <h3 className="text-3xl font-bold text-gray-700">Coffee First</h3>
        <div className="py-4">
        <img src="/images/coffeefirstss.jpg" alt="screenshot of coffee frist" className="rounded-xl shadow-lg feature-img" loading="lazy"/>
        </div>
        <Link href="/posts/coffee-first">
          <a className="text-2xl underline go-link">Learn more about this project</a>
        </Link>
      </article>
      <article className="text-center my-2 py-12">
      <Link href="/posts">
        <a className="btn-outline text-2xl no-underline">Blog Posts →</a>
      </Link>
      </article> 
    </section>
  )
}
