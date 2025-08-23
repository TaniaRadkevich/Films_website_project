import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchFilms } from './thunks/filmThunk'

export interface FilmsState {
  items: [],
  loading: boolean,
}

const initialState : FilmsState = {
  items: [],
  loading: false,
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
extraReducers: (builder) => {
  builder
  .addCase(fetchFilms.pending,(state)=>{
 state.loading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.loading = false;

      });
    }
  });


export default filmsSlice.reducer

