import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://www.omdbapi.com',
});


export const fetchFilms = createAsyncThunk('film/fetchFilms', async (searchQuery = 'batman', { rejectWithValue }) => {

    const response = await axiosInstance.get('/', {
        params: {
          apikey: '71154cc2',
          s: searchQuery,
          page: 1,
        },
    });
     if (response.data.Response === 'False') {
        return rejectWithValue(response.data.Error);
      }
    return response.data.Search;
  },
);
