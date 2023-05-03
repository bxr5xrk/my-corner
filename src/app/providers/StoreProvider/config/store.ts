import { configureStore } from '@reduxjs/toolkit';
import { counterSlice, CounterSchema } from 'entities/Counter';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

interface StoreSchema {
  counter: CounterSchema;
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
