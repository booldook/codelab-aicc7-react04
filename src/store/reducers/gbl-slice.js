import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  greeting: "",
  theme: "light",
  user: {
    isLogging: false,
    isLogOn: false,
    data: {},
  },
}

const fetchUser = createAsyncThunk("glb/fetchUser", async (userId) => {
  const url = "https://jsonplaceholder.typicode.com/users/"
  const response = await axios(url + userId)
  return response
})

const glbSlice = createSlice({
  name: "glb",
  initialState,
  reducers: {
    // sync
    setGreeting: (state, action) => {
      state.greeting = action.payload
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light"
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.user.isLogging = true
      })
      .addCase(fetchUser.fullfilled, (state, action) => {
        state.user.isLogging = false
        state.user.data = action.payload.data
      })
      .addCase(fetchUser.reject, (state) => {
        state.user.isLogging = false
        state.user.data = {}
        state.user.isLogOn = false
      })
  },
})

export default glbSlice.reducer
export { fetchUser }

// export default React
// export { useState, useCallback }
// import glbReducer from "glb-slice"
// import { fetchUser } from "glb-slice"
