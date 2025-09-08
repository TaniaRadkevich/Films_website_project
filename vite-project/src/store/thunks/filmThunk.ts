import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Film } from "../filmSlice";
import { axiosInstance } from "../../axios/axios";

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchFilms = createAsyncThunk<
  { Search: Film[]; totalResults: number; page: number; query: string; type?: string },
  { query: string; page: number; type?: string },
  { rejectValue: string }
>("film/fetchFilms", async ({ query, page, type }, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get("/", {
      params: {
        apikey: apiKey,
        s: query,
        page,
        type: type && type !== "All" ? type.toLowerCase() : undefined,
      },
    });

    if (response.data.Response === "False") {
      return rejectWithValue(response.data.Error);
    }

    const films: Film[] = response.data.Search;

    const filmsWithRating = await Promise.all(
      films.map(async (film) => {
        try {
          const detailsRes = await axiosInstance.get("/", {
            params: {
              apikey: "71154cc2",
              i: film.imdbID,
            },
          });
          return { ...film, imdbRating: detailsRes.data.imdbRating };
        } catch {
          return { ...film, imdbRating: "N/A" };
        }
      })
    );

    return {
      Search: filmsWithRating,
      totalResults: parseInt(response.data.totalResults, 10),
      page,
      query,
      type,
    };
  } catch (err) {
    return rejectWithValue("Failed to fetch films");
  }
});
