import Link from 'next/link'
import {Fragment} from 'react'

export default function ContactButton() {
  return (
    <Fragment>
      <div style={{position: `fixed`, bottom: `10px`, right: `10px`}} class="sticky-btn">
        <Link href="/contact">
          <a className="contact-btn">
            Let's Work Together
          </a>
        </Link>
      </div>
  </Fragment>
  )
}
