import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Film } from "../filmSlice";

export const axiosInstance = axios.create({
  baseURL: "https://www.omdbapi.com",
});

export const fetchFilms = createAsyncThunk<
  { Search: Film[]; totalResults: number; page: number; query: string },
  { query: string; page: number },
  { rejectValue: string }
>("film/fetchFilms", async ({ query, page }, { rejectWithValue }) => {
  const response = await axiosInstance.get("/", {
    params: {
      apikey: "71154cc2",
      s: query,
      page: page,
    },
  });
  if (response.data.Response === "False") {
    return rejectWithValue(response.data.Error);
  }
  return {
   Search:response.data.Search,
  totalResults: parseInt(response.data.totalResults, 10),
  page,
  query,
  }
});
