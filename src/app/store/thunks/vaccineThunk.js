import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchZingNewVaccineData } from '../../apis/zingNewsApi';

export const fetchVaccineDataThunk = createAsyncThunk(
  'vaccine/fetchVaccineData',
  async () => {
    const response = await fetchZingNewVaccineData();
    console.log(response);
    return response;
  },
);
