import { getPost } from "@/api/adminPostsApi";
export const getValues = (postSlug, titleSetter, slugSetter, bodySetter) => {
  if (postSlug) {
    getPost(postSlug).then((res) => {
      titleSetter(res.title)
      slugSetter(res.slug)
      bodySetter(res.body)
    })
  }
}
