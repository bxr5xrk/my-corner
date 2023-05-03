import { UserSchema } from '../types/userSchema';
import reducer, { userActions } from './userSlice';

describe('User reducer', () => {
  it('should return the initial state', () => {
    const expectedInitialState: UserSchema = { authData: null };
    expect(reducer(undefined, { type: '' })).toEqual(expectedInitialState);
  });

  it('should set authData to null with setAuthData action', () => {
    const prevState: UserSchema = { authData: null };
    const action = userActions.setAuthData();
    const nextState = reducer(prevState, action);
    expect(nextState).toEqual({ authData: null });
  });
});
