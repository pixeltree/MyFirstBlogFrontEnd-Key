import Head from 'next/head'
import { useRouter } from 'next/router'

import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import { useAuth0 } from "@auth0/auth0-react"

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout(
  {
    children,
    meta,
    isRssFeed = false,
    previousPathname,
  }) {
  const { isAuthenticated } = useAuth0()
  let router = useRouter()
  const { slug } = router.query

  if (isRssFeed) {
    return children
  }

  const handleDelete = () => {
    router.push(`/posts/`)
  }

  return (
    <>
      <Head>
        <title>{`${meta.title} - Spencer Sharp`}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700" />
              </button>
            )}
            <article>
              <header className="flex flex-col">
                <div className='flex items-baseline justify-between'>
                  <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                    {meta.title}
                  </h1>
                </div>
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-base text-zinc-400"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
