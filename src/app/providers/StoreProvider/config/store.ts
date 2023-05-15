import { configureStore } from '@reduxjs/toolkit';
import { counterSlice, CounterSchema } from 'entities/Counter';
import { UserSchema, userSlice } from 'entities/User';
import { authApi } from 'features/AuthByUsername';

export interface StoreSchema {
  counter: CounterSchema;
  user: UserSchema;
}

export const createStore = (initialState?: StoreSchema) =>
  configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
      user: userSlice,
      counter: counterSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([authApi.middleware]),
    devTools: process.env.NODE_ENV === 'development',
    preloadedState: initialState
  });

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
