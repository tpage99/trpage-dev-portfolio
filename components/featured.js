import Link from 'next/link'

export default function Featured() {
  return (
    <section className="items-center">
      <h2 className="text-4xl font-bold text-center">previous projects</h2>
      <article className="p-6">
        <Link href="/posts/sweetalicious" className="py-4">
          <a>
          <img src="/images/sweetalicious.png" alt="screenshot of sweetalicious" className="rounded-xl shadow-lg feature-img" loading="lazy"/>
          </a>
        </Link>
        <h3 className="text-3xl font-bold text-gray-700">Sweetalicious</h3>
        <Link href="/posts/sweetalicious">
          <a className="text-large md:text-2xl underline go-link">
            Learn more about this project
          </a>
        </Link>
      </article>
      <article className="p-6">
        <Link  href="/posts/coffee-first" className="py-4">
          <a>
            <img src="/images/coffeefirstss.jpg" alt="screenshot of coffee frist" className="rounded-xl shadow-lg feature-img" loading="lazy"/>
          </a>
        </Link>
        <h3 className="text-3xl font-bold text-gray-700">Coffee First</h3>
        <Link href="/posts/coffee-first">
          <a className="text-large md:text-2xl underline go-link">Learn more about this project</a>
        </Link>
      </article>
      <article className="p-6">
        <Link href="/posts/local-417-eats" className="py-4">
          <a>
            <img src="/images/local417eats.jpg" alt="screenshot of local 417 eats" className="rounded-xl shadow-lg feature-img" loading="lazy"/>
          </a>
        </Link>
        <h3 className="text-3xl font-bold text-gray-700">Local 417 Eats</h3>
        <Link href="/posts/local-417-eats">
          <a className="text-large md:text-2xl underline go-link">
            Learn more about this project
          </a>
        </Link>
      </article>
      <article className="p-6">
        <Link href="/posts/wc-partners" className="py-4">
          <a>
            <img src="/images/wcpartners.jpg" alt="screenshot of wc partners" className="rounded-xl shadow-lg feature-img" loading="lazy"/>
          </a>
        </Link>
        <h3 className="text-3xl font-bold text-gray-700">WC Partners</h3>
        <Link href="/posts/wc-partners">
          <a className="text-large md:text-2xl underline go-link">Learn more about this project</a>
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
