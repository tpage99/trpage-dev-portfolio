import Link from 'next/link'

export default function Accomplishments() {
  return (
    <section className="items-center border-b border-gray-300 mb-4 pb-4">
      <article>
      <h2 className="text-center text-3xl md:text-5xl font-bold pt-8 mb-0 pb-0">Getting started selling on Shopify is <em>easy</em>.</h2> 
      <h3 className="text-xl md:text-3xl text-center font-light italic pb-4 text-gray-600">Finding an experienced developer you can trust to help you customize your store and reach more customers? Not so much.</h3>
      </article>
      <article className="md:grid md:grid-cols-3 md:auto-cols-fr my-8 py-8">
        <div>
          <img
                src="/images/taylor-photo.jpg"
                className="h-36 md:h-64 w-auto mb-0 pb-0 px-4"
                style={{borderRadius: `2rem`}}
                alt="taylor sitting in a chair"
              />
        </div>
        <div className="md:col-span-2 text-center rounded-xl shadow-xl mt-6 md:mt-0 px-4 py-6 bg-gray-700 flex items-center">
          <h3 className="text-2xl md:text-4xl text-center m-0 p-0 font-bold text-white">
              Hi, I'm TR (Taylor)! And I build websites that sell.
            </h3>
        </div>  
      </article>
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
              <img src="https://res.cloudinary.com/tpage99/image/upload/v1629580760/dev/6087f4100a21ee377258251c_upwork_tm.png" alt="upwork logo" className="mx-auto md:max-w-2xl rounded-xl shadow-lg feature-img p-8" loading="lazy"/>
            </a>
          </Link>
          <h3 className="mt-8 text-2xl font-bold text-gray-700">Top Rated Freelancer on Upwork</h3>
        </article>
        <article className="p-6">
          <Link href="https://www.storetasker.com/experts/taylor-page">
            <a>
              <img src="https://res.cloudinary.com/tpage99/image/upload/v1629580832/dev/storetasker-logo-white.3ed35d301afa0db4dbe42a8d64a472ce.png" alt="storetasker logo" className="mx-auto md:max-w-2xl rounded-xl shadow-lg feature-img bg-black p-8" loading="lazy"/>
            </a>
          </Link>
          <h3 className="mt-8 text-2xl font-bold text-gray-700">Senior Shopify Expert on Storetasker</h3>
        </article>
      </div>
      <div className="text-center">
        <p>Not convinced? <Link href="#reviews"><a className="go-link underline">Skip down to reviews</a></Link>.</p>
      </div>
    </section>
  )
}
