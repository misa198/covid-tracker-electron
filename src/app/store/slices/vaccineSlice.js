import { createSlice } from '@reduxjs/toolkit';
import { fetchVaccineDataThunk } from '../thunks/vaccineThunk';

const initialState = {
  overview: {
    data: {
      dayDoses: [],
      totalDoses: [],
      firstRatio: 0,
      secondRatio: 0,
      firstTotal: 0,
      secondTotal: 0,
    },
    loading: false,
    error: false,
  },
};

const vaccineSlice = createSlice({
  name: 'vaccine',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVaccineDataThunk.pending, (state) => {
      state.overview.loading = true;
      state.overview.error = false;
    });
    builder.addCase(fetchVaccineDataThunk.fulfilled, (state, action) => {
      state.overview.data = action.payload;
      state.overview.loading = false;
    });
    builder.addCase(fetchVaccineDataThunk.rejected, (state) => {
      state.overview.error = true;
      state.overview.loading = false;
    });
  },
});

export default vaccineSlice.reducer;
export const { actions } = vaccineSlice.actions;
