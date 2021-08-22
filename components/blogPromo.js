import Link from 'next/link'

export default function BlogPromo() {
  return (
    <section className="items-center border-t border-gray-300 my-8 py-8">
      <h2 className="text-3xl md:text-5xl font-bold text-center">I try to write about interesting things</h2>
      <article className="text-center my-2 py-12">
      <Link href="/posts">
        <a className="btn-outline text-2xl no-underline">Blog Posts →</a>
      </Link>
      </article> 
    </section>
  )
}
