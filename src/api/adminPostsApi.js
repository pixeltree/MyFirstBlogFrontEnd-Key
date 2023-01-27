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

export const editPost = (postSlug, postData) => {
  return AdminAxios.put(`/posts/${postSlug}`, postData, {
    headers: {
      "Content-Type": "application/json"
    }
  })
}

export const deletePost = (postSlug) => {
  return AdminAxios.delete(`/posts/${postSlug}`, {
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.data)
}
