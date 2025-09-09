VITE_API_KEY="AIzaSyDBvpClL0bybkXJgnAAagyJx2xeci9drdc"
VITE_AUTH_DOMAIN="booldook-store.firebaseapp.com"
VITE_PROJECT_ID="booldook-store"
VITE_STORAGE_BUCKET="booldook-store.firebasestorage.app"
VITE_MESSAGING_SENDER_ID="491904710503"
VITE_APP_ID="1:491904710503:web:a8a22a1676fc38030b61c2"
VITE_MEASUREMENT_ID="G-6PTPXBLYQR"
VITE_RTDB_URL="https://booldook-store-default-rtdb.firebaseio.com"

VITE_EXPRESS_API="http://localhost:3000"
VITE_REFRESH_API="/public/refresh"
VITE_TIMEOUT_API=10000

## 8월 29일 이전

- React / useState, useEffect, webpack(+ mui, scss, typescript), vite,
- axios (custom interceptor)
- store (Redux toolkit)

## 8월 29일 계획

- SWR/ReactQuery
- contextProvider
- CustomHook, (HOF, HOC- 프로젝트 때)
- emotion, scss
- noServer (firebase -> Auth, Firestore, realtimeDB)

## 9월 1일 계획

- Typescript(Webpack 설정, vite)

## 9월 2일 (5일 + 4일 지연)

## history 객체

```js
window.history.go(-2)
window.history.back()

window.location.href = "/abc" // /a -> /b (href)-> /c (back)=> /b
window.location.replcae("/") // /a -> /b (replace)-> /c (back)=> /a

const set = new Set()
set.add("A")
set.add("B")
set.add("B")
set.add("C")
console.log(set)

const map = new Map()
map.set("A", "AA")
console.log(map.get("A"))
```

### Event처리

```js
window.addEventListener("onload", (e) => {})
window.getElementById("#btn").addEventListener("onclick", (e) => {})

window.customEvent(new CustomEvent("ERROR_500", { msg: "...", code: "" }))
window.addEventListener("ERROR_500", (e) => {})
```
