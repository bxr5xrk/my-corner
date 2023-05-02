import { RootState } from 'app/providers/StoreProvider';

export const selectCounter = (state: RootState) => state.counter;
