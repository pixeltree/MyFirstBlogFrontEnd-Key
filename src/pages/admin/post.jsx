import { useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useAuth0 } from "@auth0/auth0-react"
import { Container } from '@/components/Container'
import RichTextEditor from "@/components/NewPost/RichTextEditor"

const Post = () => {
  const { isAuthenticated } = useAuth0()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/")
    }
  }, []);

  return (
    <>
      <Head>
        <title>Admin Dashboard - New Post</title>
      </Head>
      <Container className="mt-16 sm:mt-32">
        <RichTextEditor />
      </Container>
    </>
  )
}

export default Post
