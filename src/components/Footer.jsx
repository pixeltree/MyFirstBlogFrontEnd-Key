import Link from 'next/link'
import { useRouter } from "next/router"

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  const isHomePage = useRouter().pathname === '/'

  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800">
                {!isHomePage &&
                  <NavLink href="/">Back</NavLink>
                }
              </div>
              <p className="text-sm text-zinc-400">
                &copy; {new Date().getFullYear()} Pixeltree Inc. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
