import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCovidVnExpressDataByDayThunk,
  fetchCovidVnExpressDataByLocationThunk,
  fetchCovidVnExpressDataByMapThunk,
} from '../thunks/homeThunks';

const initialState = {
  updatedAt: null,
  homeFetchedAt: null,
  dataByDay: {
    data: [],
    loading: false,
    error: false,
  },
  dataByMap: {
    data: [],
    loading: false,
    error: false,
  },
  dataByLocation: {
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
    // By day
    builder.addCase(fetchCovidVnExpressDataByDayThunk.pending, (state) => {
      state.dataByDay.loading = true;
    });
    builder.addCase(
      fetchCovidVnExpressDataByDayThunk.fulfilled,
      (state, action) => {
        state.dataByDay.loading = false;
        state.dataByDay.data = action.payload.data;
        state.updatedAt = action.payload.updatedAt;
        state.homeFetchedAt = new Date().getTime().toString();
        localStorage.setItem(
          'homeDataByDay',
          JSON.stringify(action.payload.data),
        );
        localStorage.setItem('homeUpdatedAt', action.payload.updatedAt);
        localStorage.setItem('homeFetchedAt', new Date().getTime().toString());
      },
    );
    builder.addCase(fetchCovidVnExpressDataByDayThunk.rejected, (state) => {
      state.dataByDay.loading = false;
      state.dataByDay.error = true;
      const dataByDay = localStorage.getItem('homeDataByDay');
      const updatedAt = localStorage.getItem('homeUpdatedAt');
      const homeFetchedAt = localStorage.getItem('homeFetchedAt');
      if (homeFetchedAt) state.homeFetchedAt = homeFetchedAt;
      if (dataByDay) state.dataByDay.data = JSON.parse(dataByDay);
      if (updatedAt) state.updatedAt = updatedAt;
    });

    // By map
    builder.addCase(fetchCovidVnExpressDataByMapThunk.pending, (state) => {
      state.dataByMap.loading = true;
    });
    builder.addCase(
      fetchCovidVnExpressDataByMapThunk.fulfilled,
      (state, action) => {
        state.dataByMap.loading = false;
        state.dataByMap.data = action.payload.data;
        localStorage.setItem(
          'homeDataByMap',
          JSON.stringify(action.payload.data),
        );
      },
    );
    builder.addCase(fetchCovidVnExpressDataByMapThunk.rejected, (state) => {
      state.dataByMap.loading = false;
      state.dataByMap.error = true;
      const dataByMap = localStorage.getItem('homeDataByMap');
      if (dataByMap) state.dataByMap.data = JSON.parse(dataByMap);
    });

    // By location
    builder.addCase(fetchCovidVnExpressDataByLocationThunk.pending, (state) => {
      state.dataByLocation.loading = true;
    });
    builder.addCase(
      fetchCovidVnExpressDataByLocationThunk.fulfilled,
      (state, action) => {
        state.dataByLocation.loading = false;
        state.dataByLocation.data = action.payload.data;
        localStorage.setItem(
          'homeDataByLocation',
          JSON.stringify(action.payload.data),
        );
      },
    );
    builder.addCase(
      fetchCovidVnExpressDataByLocationThunk.rejected,
      (state) => {
        state.dataByLocation.loading = false;
        state.dataByLocation.error = true;
        const dataByLocation = localStorage.getItem('homeDataByLocation');
        if (dataByLocation)
          state.dataByLocation.data = JSON.parse(dataByLocation);
      },
    );
  },
});

export default homeSlice.reducer;
export const homeActions = homeSlice.actions;
