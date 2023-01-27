import { useAuth0 } from "@auth0/auth0-react"
import Link from "next/link"

const NewPostLink = () => {
  const { isAuthenticated } = useAuth0()

  return (
    isAuthenticated ?
      <li>
        <Link
          href="/admin/post"
          className="relative block px-3 py-2 transition hover:text-teal-500 whitespace-nowrap"
        >
          New Post
        </Link>
      </li>
      : <></>
  )
}

export default NewPostLink
