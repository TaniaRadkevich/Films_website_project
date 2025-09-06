import { createSlice } from "@reduxjs/toolkit";
import { fetchFilms } from "./thunks/filmThunk";


export interface Film {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

export interface FilmsState {
  items: Film[];
  loading: boolean;
  hasSearched: boolean;
}

const initialState: FilmsState = {
  items: [],
  loading: false,
  hasSearched: false,
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    clearFilms: (state) => {
      state.items = [];
      state.hasSearched = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.hasSearched = true;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.loading = false;
        state.hasSearched = true;
      });
  },
});

export const { clearFilms } = filmsSlice.actions;
export default filmsSlice.reducer;
