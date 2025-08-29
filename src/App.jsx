import "font-awesome/css/font-awesome.min.css"
import { SWRConfig } from "swr"
import { BrowserRouter } from "react-router-dom"
import { Provider as StoreProvider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store"
import "../public/css/fonts.css"
import "../public/css/base.css"
import "../public/css/shop.css"
import TestProvider from "./providers/TestProviders"
import Containers from "./Containers"
import { swrValue } from "./swr"

function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SWRConfig value={swrValue}>
          <BrowserRouter>
            <TestProvider>
              <Containers />
            </TestProvider>
          </BrowserRouter>
        </SWRConfig>
      </PersistGate>
    </StoreProvider>
  )
}

export default App
