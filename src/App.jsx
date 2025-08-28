import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter } from "react-router-dom"
import { Provider as StoreProvider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store"
import "../public/css/fonts.css"
import "../public/css/base.css"
import "../public/css/shop.css"
import Containers from "./Containers"
import prdJson from "../public/mock/prd.json"

function App() {
  const json = JSON.stringify(prdJson)
  const jsObj = JSON.parse(json)
  console.log(json, jsObj)
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Containers />
        </BrowserRouter>
      </PersistGate>
    </StoreProvider>
  )
}

export default App
