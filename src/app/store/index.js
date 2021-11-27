import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './slices/homeSlice';
import newsReducer from './slices/newsSlice';
import vaccineReducer from './slices/vaccineSlice';
import worldwideReducer from './slices/worldwideSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    worldwide: worldwideReducer,
    vaccine: vaccineReducer,
    news: newsReducer,
  },
});
