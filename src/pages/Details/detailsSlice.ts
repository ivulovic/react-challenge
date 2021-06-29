import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { DetailsSliceState } from './types';

const initialState: DetailsSliceState = {
  data: null
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = detailsSlice.actions;


// selectors

export const selectData = (state: RootState) => state.details.data;


export default detailsSlice.reducer;
