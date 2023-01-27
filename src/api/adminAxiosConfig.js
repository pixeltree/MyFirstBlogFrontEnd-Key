import axios from "axios"
import { returnInput, rejectError } from "@/api/axiosConfig"

const BASE_URL = 'http://localhost:5000' // This URL will be exposed at run time

const AdminAxios = axios.create({
  baseURL: BASE_URL
})

AdminAxios.interceptors.response.use(
  returnInput,
  rejectError,
  { synchronous: true }
)

export default AdminAxios
