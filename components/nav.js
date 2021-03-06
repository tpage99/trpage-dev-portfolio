import Link from 'next/link'

const links = [
  { href: 'https://experts.shopify.com/the-pages-media', label: 'Shopify Expert Marketplace' },
  { href: 'https://www.upwork.com/fl/trpage', label: 'Upwork' },
  { href: 'https://www.storetasker.com/experts/taylor-page', label: 'Storetasker'},
  { href: 'https://github.com/tpage99', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/taylor-page-04774b79/', label: 'LinkedIn'}
]

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="m-auto">
        <a>
          <img
            src="/images/logo.png"
            className="inline h-16 md:h-24 mt-0 w-auto pr-2 md:pr-6 pb-1"
            alt="tr page logo"
          />
          <p className="inline align-bottom text-xl sm:text-2xl md:text-3xl font-hairline mb-0 pb-0">freelance web developer.</p>
        </a>
        </Link>
      <ul className="flex justify-around flex-wrap my-2 py-6 border-b border-gray-300">
        {links.map(({ href, label }) => (
          <li className="my-2" key={`${href}${label}`}>
            <a href={href} className="btn-outline no-underline" aria-label={label + " profile"}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
