import Link from 'next/link'

export default function Featured() {
  return (
    <section>
      <article className="m-4 p-4">
        <h2 className="text-2xl font-semibold">Hive of the Ozarks</h2>
        <Link href="#">
          <a className="text-lg hover:underline">Learn more about this project</a>
        </Link>
      </article>
      <article className="m-4 p-4">
        <h2 className="text-2xl font-semibold">Local 417 Eats</h2>
        <Link href="#">
          <a className="text-lg hover:underline">Learn more about this project</a>
        </Link>
      </article>
      <article className="m-4 p-4">
        <h2 className="text-2xl font-semibold">WC Partners</h2>
        <Link href="#">
          <a className="text-lg hover:underline">Learn more about this project</a>
        </Link>
      </article>
      <article className="m-4 p-4">
        <h2 className="text-2xl font-semibold">Coffee First</h2>
        <Link href="#">
          <a className="text-lg hover:underline">Learn more about this project</a>
        </Link>
      </article>
      <article className="m-4 p-4">
        <h2 className="text-2xl font-semibold">Kevin Lane's Catering</h2>
        <Link href="#">
          <a className="text-lg hover:underline">Learn more about this project</a>
        </Link>
      </article>  
    </section>
  )
}
