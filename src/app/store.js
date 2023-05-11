import { configureStore } from '@reduxjs/toolkit'
import contriesReducer from '../features/contries/contriesSlice'

export const store = configureStore({
  reducer: {
    country: contriesReducer
  },
})