/**
 * 1. api 공통 파라메터 생성
 * 2. 토큰 저장/가져오는 함수(LocalStorage)
 * 3. interceptors.request 토큰 탑재
 * 4. interceptors.response 401처리(동시요청처리)
 * 5. Token갱신 및 지연요청 송신
 */
import axios from "axios"

/***** 전역상수 *****/
export const BASE_URL = import.meta.env.VITE_EXPRESS_API
export const REFRESH_URL = import.meta.env.VITE_REFRESH_API

/***** 토큰 Getter/Setter *****/
export const getAccessToken = () => {}
export const getRefreshToken = () => {}
export const getTokens = () => {}
export const setTokens = (accessToken, refreshToken) => {
  window.localStorage.setItem("accessToken", accessToken)
  window.localStorage.setItem("refreshToken", refreshToken)
}
export const crearTokens = () => {}

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
})

// 요청전 - Token탑재
api.interceptors.request.use(
  (config) => {
    const authString = sessionStorage.getItem("persist:auth")
    const auth = JSON.parse(authString)
    const token = auth?.data?.token || "ABCDE"
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

// 응답후 - 에러처리
api.interceptors.response.use(
  (response) => {
    response.my_message = "..."
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      // TODO :: 리플래시 토큰 요청 코드
    }
    if (error.response?.status === 500) {
      // 공통 에러 처리
    }
    error.MY_RESPONSE = "..."
    return Promise.reject(error)
  }
)

export { api }
