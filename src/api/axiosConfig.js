import axios from "axios"
import { isHyperlink } from '@/lib/isHyperlink'

const BASE_URL = process.env.DOTNET_SERVER_URL

const AXIOS_BASE = axios.create({
    baseURL: BASE_URL,
    timeout: 3000,
  })

const JSON_CLIENT = isHyperlink(BASE_URL) ? AXIOS_BASE : false

export default JSON_CLIENT
