import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import type { Film } from '../filmSlice'

export const axiosInstance = axios.create({
  baseURL: 'https://www.omdbapi.com',
});


export const fetchFilms = createAsyncThunk<Film[], string | undefined>('film/fetchFilms', async (searchQuery,{ rejectWithValue }) => {

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
