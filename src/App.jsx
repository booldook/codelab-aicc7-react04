import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store"
import "../public/css/fonts.css"
import "../public/css/base.css"
import "../public/css/shop.css"
import Containers from "./Containers"

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Containers />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
