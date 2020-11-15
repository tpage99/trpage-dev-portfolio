import Link from 'next/link'

const links = [
  { href: 'https://github.com/tpage99', label: 'GitHub' },
  { href: 'https://twitter.com/taylorpage71', label: 'Twitter' },
  { href: 'https://www.linkedin.com/in/taylor-page-04774b79/', label: 'LinkedIn'}
]

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="flex">
        <a>
        <img
          src="/images/profile.jpg"
          className="inline h-24 w-auto rounded-lg transform origin-bottom-left hover:-rotate-45 transition duration-300"
          alt="Taylor profile picture"
        />
        <h1 className="inline md:float-right text-4xl align-middle md:text-6xl font-bold px-6 align-middle">Taylor Page</h1>
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
