import { createSlice } from "@reduxjs/toolkit";
import { fetchFilmDetails } from "./thunks/filmDetailsThunk";

export interface FilmDetails {
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
  Genre: string;
  Actors: string;
  Runtime: string;
  Released: string;
  Type: string;
  imdbRating: string;
}

export interface FilmDetailsState {
  data: FilmDetails | null;
  loading: boolean;
  error: string | null;
}

const initialState: FilmDetailsState = {
  data: null,
  loading: false,
  error: null,
};

export const filmDetailsSlice = createSlice({
    name: "filmDetails",
    initialState,       
    reducers: {
        clearFilmDetails: (state) => {
            state.data = null;  
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilmDetails.pending, (state) => { 
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFilmDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchFilmDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to find film details";
            });
    },
});

export const { clearFilmDetails } = filmDetailsSlice.actions;
export default filmDetailsSlice.reducer;