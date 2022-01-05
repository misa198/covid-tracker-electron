import { createSlice } from '@reduxjs/toolkit';
import { fetchKompaWorldwideCasesThunk } from '../thunks/worldwideThunk';

const initialState = {
  worldwideFetchedAt: null,
  data: {
    totalConfirmed: 0,
    totalConfirmedLast: 0,
    totalRecovered: 0,
    totalRecoveredLast: 0,
    totalDeaths: 0,
    totalDeathsLast: 0,
  },
  loading: false,
  error: false,
};

const worldwideSlice = createSlice({
  name: 'worldwide',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchKompaWorldwideCasesThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchKompaWorldwideCasesThunk.fulfilled,
      (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.worldwideFetchedAt = new Date().getTime().toString();
        localStorage.setItem('worldwideCases', JSON.stringify(action.payload));
        localStorage.setItem(
          'worldwideFetchedAt',
          new Date().getTime().toString(),
        );
      },
    );
    builder.addCase(fetchKompaWorldwideCasesThunk.rejected, (state) => {
      state.loading = false;
      state.error = true;
      const worldwideFetchedAt = localStorage.getItem('worldwideFetchedAt');
      if (worldwideFetchedAt) state.worldwideFetchedAt = worldwideFetchedAt;
      const worldwideCases = localStorage.getItem('worldwideCases');
      if (worldwideCases) state.data = JSON.parse(worldwideCases);
    });
  },
});

export default worldwideSlice.reducer;
export const homeActions = worldwideSlice.actions;
