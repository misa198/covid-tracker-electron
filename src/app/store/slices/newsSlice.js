import { createSlice } from '@reduxjs/toolkit';
import { fetchKompaNewsThunk } from '../thunks/newsThunk';

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchKompaNewsThunk.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchKompaNewsThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchKompaNewsThunk.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default newsSlice.reducer;
export const { actions } = newsSlice.actions;
