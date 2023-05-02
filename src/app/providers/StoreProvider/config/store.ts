import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from 'entities/Counter';
import { CounterState } from 'entities/Counter/model/types/counterSchema';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

interface StoreSchema {
  counter: CounterState;
}

export const createStore = (initialState?: StoreSchema) =>
  configureStore({
    reducer: {
      counter: counterSlice
    },
    devTools: process.env.NODE_ENV === 'development',
    preloadedState: initialState
  });

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;