import { configureStore, createSlice } from '@reduxjs/toolkit'

const adminShellSlice = createSlice({
  name: 'adminShell',
  initialState: {
    activeSection: 'dashboard',
  },
  reducers: {
    setActiveSection(state, action: { payload: string }) {
      state.activeSection = action.payload
    },
  },
})

export const { setActiveSection } = adminShellSlice.actions

export const store = configureStore({
  reducer: {
    adminShell: adminShellSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
