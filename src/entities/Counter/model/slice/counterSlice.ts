import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from '../types/counterSchema';

const initialState: CounterState = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
