import { RootState } from 'app/providers/StoreProvider';

export const selectUser = (state: RootState) => state.user;
