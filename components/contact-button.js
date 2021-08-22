import Link from 'next/link'
import {Fragment} from 'react'

export default function ContactButton() {
  return (
    <Fragment>
      <div style={{position: `fixed`, bottom: `10px`, right: `10px`}} className="sticky-btn">
        <Link href="/contact">
          <a className="contact-btn">
            Start a project
          </a>
        </Link>
      </div>
  </Fragment>
  )
}
