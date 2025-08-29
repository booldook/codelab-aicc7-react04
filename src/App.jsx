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

function App() {
  const swrValue = {
    suspense: false,
    revalidateIfStale: true,
    revalidateOnMount: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshInterval: 0,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    shouldRetryOnError: false,
    dedupingInterval: 2000,
    focusThrottleInterval: 5000,
    loadingTimeout: 3000,
    errorRetryInterval: 5000,
    errorRetryCount: 0,
    keepPreviousData: true,
    onLoadingSlow: (key, config) => {},
    onSuccess: (data, key, config) => {
      console.log(data, key, config)
    },
    onError: (err, key, config) => {},
    onErrorRetry: (err, key, config, revalidate, revalidateOps) => {},
    onDiscarded: (key) => {},
    compare: (a, b) => {},
    isPaused: () => false,
  }
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
