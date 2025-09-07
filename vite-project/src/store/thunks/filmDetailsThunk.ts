import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "./filmThunk";
import type { FilmDetails } from "../filmDetailsSlice";



export const fetchFilmDetails = createAsyncThunk<
  FilmDetails,
  string, 
  { rejectValue: string }
>("film/fetchFilmDetails", async (imdbID, { rejectWithValue }) => {
  const response = await axiosInstance.get("/", {
    params: {
      apikey: "71154cc2",
      i: imdbID,
      plot: "full",
    },
  });

  if (response.data.Response === "False") {
    return rejectWithValue(response.data.Error);
  }

  return response.data as FilmDetails;
});