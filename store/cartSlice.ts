import { createSlice, PayloadAction, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from './store'

export interface CartItem {
  id: number
  title: string
  price: number
  thumbnail: string
  quantity: number
}

export interface CartState {
  items: CartItem[]
  total: number
}

const loadCartState = (): CartState => {
  if (typeof window !== 'undefined') {
    try {
      const serializedState = localStorage.getItem('cartState')
      if (serializedState) {
        return JSON.parse(serializedState)
      }
    } catch (error) {
      console.error('Could not load cart state from localStorage', error)
    }
  }
  return {
    items: [],
    total: 0,
  }
}

const initialState: CartState = loadCartState()

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
      state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
        if (item.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== action.payload.id)
        }
      }
      state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer