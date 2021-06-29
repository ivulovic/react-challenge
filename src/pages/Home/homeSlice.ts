import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { HomeSliceState } from './types';

const initialState: HomeSliceState = {
  symbols: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Array<string>>) => {
      state.symbols = action.payload.map(ticker => ({
        name: ticker,
        ticker: ticker.toUpperCase(),
        isChecked: false,
      }));
    },
  },
});

export const { setData } = homeSlice.actions;


// selectors

export const selectData = (state: RootState) => state.home.symbols;
export const selectFavorites = (state: RootState) => state.home.symbols.map(x => x.isChecked);


export default homeSlice.reducer;
