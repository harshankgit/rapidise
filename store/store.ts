import { configureStore, Middleware, AnyAction } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import authReducer from './authSlice'
import productsReducer from './productsSlice'

const persistStateMiddleware: Middleware = (storeAPI) => (next) => (action: any) => {
  const result = next(action);
  const state = storeAPI.getState();

  if (typeof action.type === 'string' && action.type.startsWith('cart/')) {
    try {
      const cartState = { items: state.cart.items, total: state.cart.total };
      localStorage.setItem('cartState', JSON.stringify(cartState));
    } catch (error) {
      console.error('Could not save cart state to localStorage', error);
    }
  }

  if (typeof action.type === 'string' && action.type.startsWith('auth/')) {
    try {
      const authState = {
        user: state.auth.user,
        isAuthenticated: state.auth.isAuthenticated,
        loading: state.auth.loading,
        error: state.auth.error
      };
      localStorage.setItem('authState', JSON.stringify(authState));
    } catch (error) {
      console.error('Could not save auth state to localStorage', error);
    }
  }

  return result;
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistStateMiddleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch