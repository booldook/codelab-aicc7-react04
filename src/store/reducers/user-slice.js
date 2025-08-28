import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLogging: false,
  isLogOn: false,
  data: {},
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {
    // sync
    // async
  },
})
