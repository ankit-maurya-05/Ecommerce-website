import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../Components/Featured/cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer, // Add cart reducer to the store
      },
})