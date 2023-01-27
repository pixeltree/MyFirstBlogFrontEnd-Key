import API from './axiosConfig'

export const getPosts = () => {
    return API.get('/posts/')
      .then(res => res.data)
}

export const getPost = (postSlug) => {
    return API.get(`/posts/${postSlug}`)
      .then(res => res.data)
}
