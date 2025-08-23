import { configureStore } from '@reduxjs/toolkit'
import filmsReducer from './filmSlice'


export const store = configureStore({
  reducer: {
    films: filmsReducer,
  },
})
