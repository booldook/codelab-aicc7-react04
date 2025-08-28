import axios from "axios"

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
})

const dataApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
})

api.interceptors.request.use(
  (config) => {
    const authString = sessionStorage.getItem("persist:auth")
    const auth = JSON.parse(authString)
    const { token } = auth?.data?.token || "ABCDE"
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    error.MY_REQUEST = "..."
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    response.my_message = "..."
    return response
  },
  (error) => {
    if (error.response?.status === 503) {
      // TODO :: 리플래시 코튼 요청 코드
    }
    error.MY_RESPONSE = "..."
    return Promise.reject(error)
  }
)

export { api, dataApi }
