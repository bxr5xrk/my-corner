import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
  authData: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state) => {
      state.authData = null;
    }
  }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
