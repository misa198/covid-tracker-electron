import { createSlice } from '@reduxjs/toolkit';
import { fetchCovidVnExpressDataByDayThunk } from '../thunks/homeThunks';

const initialState = {
  updatedAt: null,
  dataByDay: {
    data: [],
    loading: false,
    error: false,
  },
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCovidVnExpressDataByDayThunk.pending, (state) => {
      state.dataByDay.loading = true;
    });
    builder.addCase(
      fetchCovidVnExpressDataByDayThunk.fulfilled,
      (state, action) => {
        state.dataByDay.loading = false;
        state.dataByDay.data = action.payload.data;
        state.updatedAt = action.payload.updatedAt;
      },
    );
    builder.addCase(fetchCovidVnExpressDataByDayThunk.rejected, (state) => {
      state.dataByDay.loading = false;
      state.dataByDay.error = true;
    });
  },
});

export default homeSlice.reducer;
export const homeActions = homeSlice;
