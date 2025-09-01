import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 15000,
})

export type Paginated<T> = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: T[]
}
