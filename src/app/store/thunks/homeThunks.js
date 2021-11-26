import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchCovidVnExpressDataByDay,
  fetchCovidVnExpressDataByLocation,
  fetchCovidVnExpressDataByMap,
} from '../../apis/vnExpressApi';

export const fetchCovidVnExpressDataByDayThunk = createAsyncThunk(
  'home/fetchCovidVnExpressDataByDay',
  async () => fetchCovidVnExpressDataByDay(),
);

export const fetchCovidVnExpressDataByMapThunk = createAsyncThunk(
  'home/fetchCovidVnExpressDataByMap',
  async () => fetchCovidVnExpressDataByMap(),
);

export const fetchCovidVnExpressDataByLocationThunk = createAsyncThunk(
  'home/fetchCovidVnExpressDataByLocation',
  async () => fetchCovidVnExpressDataByLocation(),
);
