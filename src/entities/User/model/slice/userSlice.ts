import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/userSchema';

export const LS_USER_KEY = 'user';

const authDataFromLS = JSON.parse(
  localStorage.getItem(LS_USER_KEY) ?? 'null'
) as User;

const initialState: UserSchema = {
  authData: authDataFromLS
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    logOut: (state) => {
      state.authData = null;
    }
  }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
