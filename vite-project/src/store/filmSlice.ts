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
  totalResults: number;
  page: number;
  query: string;
}

const initialState: FilmsState = {
  items: [],
  loading: false,
  hasSearched: false,
  totalResults: 0,
  page: 0,
  query: "",
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    clearFilms: (state) => {
      state.items = [];
      state.hasSearched = false;
      state.loading = false;
      state.totalResults = 0;
      state.page = 0;
      state.query = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.loading = false;
        state.hasSearched = true;

        if (action.payload.page === 1) {
          state.items = action.payload.Search;
        } else {
          state.items = [...state.items, ...action.payload.Search];
        }
        state.totalResults = action.payload.totalResults;
        state.page = action.payload.page;
        state.query = action.payload.query;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.loading = false;
        state.hasSearched = true;
      });
  },
});

export const { clearFilms } = filmsSlice.actions;
export default filmsSlice.reducer;
