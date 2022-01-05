import { createSlice } from '@reduxjs/toolkit';
import {
  fetchVaccineDataByLocationThunk,
  fetchVaccineDataThunk,
} from '../thunks/vaccineThunk';

const initialState = {
  overview: {
    data: {
      dayDoses: [],
      summaryDoses: [],
      firstRatio: 0,
      secondRatio: 0,
      firstTotal: 0,
      secondTotal: 0,
    },
    loading: false,
    error: false,
  },
  dataByLocation: {
    data: [],
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
      state.vaccineFetchedAt = new Date().getTime().toString();
      const vaccineFetchedAt = localStorage.getItem('vaccineFetchedAt');
      if (vaccineFetchedAt) state.vaccineFetchedAt = vaccineFetchedAt;
      localStorage.setItem('vaccineOverview', JSON.stringify(action.payload));
      localStorage.setItem('vaccineFetchedAt', new Date().getTime().toString());
    });
    builder.addCase(fetchVaccineDataThunk.rejected, (state) => {
      state.overview.error = true;
      state.overview.loading = false;
      const overview = localStorage.getItem('vaccineOverview');
      if (overview) state.overview.data = JSON.parse(overview);
    });

    builder.addCase(fetchVaccineDataByLocationThunk.pending, (state) => {
      state.dataByLocation.loading = true;
      state.dataByLocation.error = false;
    });
    builder.addCase(
      fetchVaccineDataByLocationThunk.fulfilled,
      (state, action) => {
        state.dataByLocation.data = action.payload;
        state.dataByLocation.loading = false;
        localStorage.setItem(
          'vaccineDataByLocation',
          JSON.stringify(action.payload),
        );
      },
    );
    builder.addCase(fetchVaccineDataByLocationThunk.rejected, (state) => {
      state.dataByLocation.error = true;
      state.dataByLocation.loading = false;
      const dataByLocation = localStorage.getItem('vaccineDataByLocation');
      if (dataByLocation)
        state.dataByLocation.data = JSON.parse(dataByLocation);
    });
  },
});

export default vaccineSlice.reducer;
export const { actions } = vaccineSlice.actions;
