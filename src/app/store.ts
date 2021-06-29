import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homeReducer from '../pages/Home/homeSlice';
import detailsReducer from '../pages/Details/detailsSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    details: detailsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
