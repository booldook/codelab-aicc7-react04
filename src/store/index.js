import { configureStore } from "@reduxjs/toolkit"
import uiReducer from "./reducers/ui-slice"
import authReducer from "./reducers/auth-slice"

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
  },
})
