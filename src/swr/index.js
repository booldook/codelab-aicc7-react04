import { api } from "@/modules/api"

export const typiFetcher = (url) => {
  const baseURL = "https://jsonplaceholder.typicode.com"
  return api.get(baseURL + url).then((response) => response.data)
}

export const firebaseGetFetcher = (url) => {
  const baseURL = "https://jsonplaceholder.typicode.com"
  api.get(baseURL + url).then((response) => response.data)
}

export const firebasePostFetcher = (url) => {
  const baseURL = "https://jsonplaceholder.typicode.com"
  api.get(baseURL + url).then((response) => response.data)
}
