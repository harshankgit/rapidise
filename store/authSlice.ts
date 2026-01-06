import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
  id: number
  username: string
  email: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

const loadAuthState = (): AuthState => {
  if (typeof window !== 'undefined') {
    try {
      const serializedState = localStorage.getItem('authState')
      if (serializedState) {
        return JSON.parse(serializedState)
      }
    } catch (error) {
      console.error('Could not load auth state from localStorage', error)
    }
  }
  return {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  }
}

const initialState: AuthState = loadAuthState()

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
      state.error = null
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false
      state.isAuthenticated = true
      state.user = action.payload
      state.error = null
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.loading = false
      state.error = null
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions

export default authSlice.reducer