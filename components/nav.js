import Link from 'next/link'

const links = [
  { href: '/posts', label: 'Blog Posts' },
  { href: '/faq', label: 'FAQs' },
  { href: '/contact', label: 'Contact' }
]

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="m-auto">
        <a className="inline-flex items-end">
          <img
            src="/images/logo.png"
            className="inline h-16 md:h-24 mt-0 w-auto pr-2 md:pr-6 pb-1"
            alt="tr page shopify expert"
          />
          <p className="inline align-bottom text-xl sm:text-2xl md:text-3xl font-hairline mb-0 pb-0">freelance web developer.</p>
        </a>
        </Link>
      <ul className="flex justify-evenly flex-wrap my-2 py-6 border-b border-gray-300">
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
