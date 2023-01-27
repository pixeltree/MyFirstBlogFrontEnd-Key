import { useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useAuth0 } from "@auth0/auth0-react"
import { Container } from '@/components/Container'
import RichTextEditor from "@/components/NewPost/RichTextEditor"
import { editPost, getPost } from "@/api/adminPostsApi"

const Edit = () => {
  const { isAuthenticated } = useAuth0()
  const router = useRouter()
  const { post } = router.query

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/")
    }
  }, []);

  const formSubmitHandler = (postData) => {
    return editPost(post, postData)
  }


  return (
    <>
      <Head>
        <title>Admin Dashboard - Edit Post</title>
      </Head>
      <Container className="mt-16 sm:mt-32">
        {isAuthenticated && <RichTextEditor postSlug={post} formSubmitHandler={formSubmitHandler} />}
      </Container>
    </>
  )
}

export default Edit
