import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchZingNewVaccineData } from '../../apis/zingNewsApi';

export const fetchVaccineDataThunk = createAsyncThunk(
  'vaccine/fetchVaccineData',
  async () => {
    const response = await fetchZingNewVaccineData();
    return response;
  },
);
