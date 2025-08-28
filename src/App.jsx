import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store"
import "../public/css/fonts.css"
import "../public/css/base.css"
import "../public/css/shop.css"
import Containers from "./Containers"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Containers />
      </BrowserRouter>
    </Provider>
  )
}

export default App
