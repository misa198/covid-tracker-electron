import { createSlice } from '@reduxjs/toolkit';
import { fetchCovidVnExpressNewsThunk } from '../thunks/newsThunk';

const initialState = {
  data: [],
  loading: false,
  error: false,
  webviewUrl: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.webviewUrl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCovidVnExpressNewsThunk.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchCovidVnExpressNewsThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      localStorage.setItem('newsData', JSON.stringify(action.payload));
    });
    builder.addCase(fetchCovidVnExpressNewsThunk.rejected, (state) => {
      state.loading = false;
      state.error = true;
      const newsData = localStorage.getItem('newsData');
      if (newsData) state.data = JSON.parse(newsData);
    });
  },
});

export default newsSlice.reducer;
export const newsActions = newsSlice.actions;
