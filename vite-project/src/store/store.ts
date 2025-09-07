import { configureStore } from '@reduxjs/toolkit'
import filmsReducer from './filmSlice'
import filmDetailsReducer from './filmDetailsSlice'


export const store = configureStore({
  reducer: {
    films: filmsReducer,
    filmDetails: filmDetailsReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;