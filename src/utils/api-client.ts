import axios from 'axios'
import { RequestQueryBuilder } from '@dataui/crud-request'

export * from '@/config/api-endpoints'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
  // withCredentials: true
})

/**
 * Build url with path params (use API_BASE_URLs as input )
 */
export const getUrl = (url: string, params?: Record<string, any>) => {
  // replace pathParam placeholders (:id) with actual values from params
  const urlWithParams = Object.keys(params || {}).reduce((acc, key) => {
    return acc.replace(`:${key}`, params[key])
  }, url)

  return urlWithParams
}

export const buildQuery = (query: Record<string, any>) => RequestQueryBuilder.create(query).query()

// api.interceptors.request.use(config => {
//   // Add auth headers here (e.g., from a token store)
//   const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// })
