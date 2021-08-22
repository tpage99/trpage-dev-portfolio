import Link from 'next/link'

export default function Accomplishments() {
  return (
    <section className="items-center border-b border-gray-300 mb-4 pb-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center">freelancing accomplishments</h2>
      <div className="text-center">
        <article className="mt-8 p-6 text-center">
          <Link href="https://experts.shopify.com/the-pages-media">
            <a>
              <img src="https://res.cloudinary.com/tpage99/image/upload/v1629580866/dev/10259538dd045ec73d6852b46ede9f17.svg" alt="shopify experts logo" className="mx-auto max-w-2xl	rounded-xl shadow-lg feature-img p-8" loading="lazy"/>
            </a>
          </Link>
          <h3 className="mt-8 text-2xl font-bold text-gray-700">Shopify Expert on the Shopify Experts Marketplace</h3>
        </article>
        <article className="p-6">
          <Link href="https://www.upwork.com/freelancers/trpage">
            <a>
              <img src="https://res.cloudinary.com/tpage99/image/upload/v1629580760/dev/6087f4100a21ee377258251c_upwork_tm.png" alt="upwork logo" className="mx-auto max-w-2xl rounded-xl shadow-lg feature-img p-8" loading="lazy"/>
            </a>
          </Link>
          <h3 className="mt-8 text-2xl font-bold text-gray-700">Top Rated Freelancer on Upwork</h3>
        </article>
        <article className="p-6">
          <Link href="https://www.storetasker.com/experts/taylor-page">
            <a>
              <img src="https://res.cloudinary.com/tpage99/image/upload/v1629580832/dev/storetasker-logo-white.3ed35d301afa0db4dbe42a8d64a472ce.png" alt="storetasker logo" className="mx-auto max-w-2xl rounded-xl shadow-lg feature-img bg-black p-8" loading="lazy"/>
            </a>
          </Link>
          <h3 className="mt-8 text-2xl font-bold text-gray-700">Senior Shopify Expert on Storetasker</h3>
        </article>
      </div>
    </section>
  )
}
