import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchKompaNews } from '../../apis/kompaApi';

export const fetchKompaNewsThunk = createAsyncThunk(
  'news/fetchKompaNews',
  async () => {
    const response = await fetchKompaNews();
    return response.data.data.topTrueNews;
  },
);
