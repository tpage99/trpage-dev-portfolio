import Link from 'next/link'

const portfolio = [
  { href: '/posts/grower-x', img: 'https://res.cloudinary.com/tpage99/image/upload/v1616678658/dev/grower-x.png', label: 'Grower-X' },
  { href: '/posts/sweetalicious', img: 'https://res.cloudinary.com/tpage99/image/upload/v1613883856/dev/sweetalicious_ss.png', label: 'Sweetalicious' },
  { href: '/posts/coffee-first', img: 'https://res.cloudinary.com/tpage99/image/upload/v1606834116/dev/coffeefirstss.jpg', label: 'Coffee First' },
  { href: '/posts/wc-partners', img: 'https://res.cloudinary.com/tpage99/image/upload/v1606833848/dev/wcpartners.jpg', label: 'WC Partners' }
]

export default function Featured() {
  return (
    <section className="items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-center">previous projects</h2>
      <ul className="flex flex-row flex-wrap justify-evenly my-2 py-6">
        {portfolio.map(({ href, img, label }) => (
          <li className="m-4 p-2" style={{ width: `385px`, height: `190px` }} key={`${href}${label}`}>
            <Link href={href} aria-label={"Link to post on" + label}>
              <a>
                <img src={img} alt={`screenshot of + ${label}`} className="w-full rounded-lg shadow-lg feature-img"/>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
