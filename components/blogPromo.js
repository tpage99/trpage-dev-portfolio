import Link from 'next/link'

export default function BlogPromo() {
  return (
    <section className="text-center rounded-xl shadow-xl m-4 p-2 bg-gray-700">
      <h2 className="text-5xl font-bold text-white">Blog</h2>
      <p className="text-xl text-white p-4">Helpful tips and ideas for merchants, including web development, best practices for you and your Shopify store, previous projects, and break down things that are going well with other stores. </p>
      <div style={{ maxWidth: `fit-content` }} className="text-center mx-auto py-10 hover:font-bold">
        <Link href="/posts">
          <a className="bg-orange-600 text-white text-xl p-4 rounded">Blog Posts →</a>
        </Link>
      </div> 
    </section>
  )
}
