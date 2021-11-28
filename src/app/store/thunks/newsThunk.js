import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCovidVnExpressNews } from '../../apis/vnExpressApi';

export const fetchCovidVnExpressNewsThunk = createAsyncThunk(
  'news/fetchCovidVnExpressNews',
  async () => {
    const response = await fetchCovidVnExpressNews();
    return response.data;
  },
);
