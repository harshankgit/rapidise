import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface ProductsState {
  items: Product[]
  loading: boolean
  error: string | null
  currentProduct: Product | null
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
  currentProduct: null,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true
      state.error = null
    },
    fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.loading = false
      state.items = action.payload
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    setCurrentProduct: (state, action: PayloadAction<Product | null>) => {
      state.currentProduct = action.payload
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload)
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex(p => p.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = action.payload
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(p => p.id !== action.payload)
    },
  },
})

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  setCurrentProduct,
} = productsSlice.actions

export default productsSlice.reducer