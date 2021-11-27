import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './slices/homeSlice';
import vaccineReducer from './slices/vaccineSlice';
import worldwideReducer from './slices/worldwideSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    worldwide: worldwideReducer,
    vaccine: vaccineReducer,
  },
});
