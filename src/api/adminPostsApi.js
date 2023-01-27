import AdminAxios from "@/api/adminAxiosConfig"

export const getPosts = () => {
  return AdminAxios.get('/posts/')
    .then(res => res.data)
}

export const getPost = (postSlug) => {
  return AdminAxios.get(`/posts/${postSlug}`)
    .then(res => res.data)
}

export const createPost = (postData) => {
  return AdminAxios.post('/posts', postData, {
    headers: {
      "Content-Type": "application/json"
    }
  })
}
