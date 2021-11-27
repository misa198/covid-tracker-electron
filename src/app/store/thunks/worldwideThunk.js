import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchKompaWorldwideCases } from '../../apis/kompaApi';

export const fetchKompaWorldwideCasesThunk = createAsyncThunk(
  'worldwide/fetchKompaWorldwideCases',
  async () => {
    const response = await fetchKompaWorldwideCases();
    return response.data.data;
  },
);
