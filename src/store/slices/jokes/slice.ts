import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Statuses from '../../../constants/Statuses';

import type IJokeResponse from './interfaces/IJokeResponse';
import type IJokes from './interfaces/IJokes';

export const initialState: IJokes = {
  status: Statuses.idle,
  joke: undefined,
};

export const fetchJoke = createAsyncThunk(
  'jokes/fetchJoke',
  async (): Promise<IJokes['joke']> => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data: IJokeResponse = await response.json();
    return data.value;
  },
);

export const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.pending, (state) => {
        state.status = Statuses.loading;
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        state.status = Statuses.idle;
        state.joke = action.payload;
      })
      .addCase(fetchJoke.rejected, (state) => {
        state.status = Statuses.failed;
      });
  },
});

export default jokesSlice.reducer;
