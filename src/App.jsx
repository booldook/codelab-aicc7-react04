import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter } from "react-router-dom"
import "../public/css/fonts.css"
import "../public/css/base.css"
import "../public/css/shop.css"
import Containers from "./Containers"

function App() {
  return (
    <BrowserRouter>
      <Containers />
    </BrowserRouter>
  )
}

export default App
