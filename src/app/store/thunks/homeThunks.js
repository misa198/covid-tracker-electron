import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCovidVnExpressDataByDay } from '../../apis/vnExpressApi';

export const fetchCovidVnExpressDataByDayThunk = createAsyncThunk(
  'home/fetchCovidVnExpressDataByDay',
  async () => fetchCovidVnExpressDataByDay(),
);
