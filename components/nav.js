import Link from 'next/link'

const links = [
  { href: 'https://github.com/tpage99', label: 'GitHub' },
  { href: 'https://twitter.com/taylorpage71', label: 'Twitter' },
  { href: 'https://www.linkedin.com/in/taylor-page-04774b79/', label: 'LinkedIn'}
]

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="m-auto">
        <a>
          <img
            src="/images/logo.png"
            className="inline h-24 w-auto pr-2 md:pr-6 pb-1"
            alt="tr page logo"
          />
          <p className="inline align-bottom text-xl md:text-3xl font-hairline mb-0 pb-0">freelance web developer.</p>
        </a>
        </Link>
      <ul className="flex justify-around flex-wrap my-2 py-6 border-b border-gray-300">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <a href={href} className="btn-outline no-underline">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
