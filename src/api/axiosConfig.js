import axios from "axios"
import { isHyperlink } from '@/lib/isHyperlink'

const BASE_URL = process.env.DOTNET_SERVER_URL

export const returnInput = input => input

export const rejectError = (error) => {
  console.error(error)
  return Promise.reject(error)
}

const AXIOS_BASE = axios.create({
    baseURL: BASE_URL
  })

AXIOS_BASE.interceptors.response.use(
  returnInput,
  rejectError,
  { synchronous: true }
)

const API = isHyperlink(BASE_URL) ? AXIOS_BASE : false

export default API
