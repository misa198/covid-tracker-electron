import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchZingNewVaccineData,
  fetchZingNewVaccineDataByLocation,
} from '../../apis/zingNewsApi';

export const fetchVaccineDataThunk = createAsyncThunk(
  'vaccine/fetchVaccineData',
  async () => {
    const response = await fetchZingNewVaccineData();
    return response;
  },
);

export const fetchVaccineDataByLocationThunk = createAsyncThunk(
  'vaccine/fetchVaccineDataByLocation',
  async () => {
    return fetchZingNewVaccineDataByLocation();
  },
);
