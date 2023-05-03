import { RootState } from 'app/providers/StoreProvider';
import { selectUser } from './userSelectors';

describe('selectUser selector', () => {
  test('should return the user state', () => {
    const mockState: RootState = {
      counter: { value: 10 },
      user: {
        authData: {
          username: 'admin',
          id: 1
        }
      },
      authApi: null
    };
    const user = selectUser(mockState);

    expect(user).toEqual({
      authData: {
        username: 'admin',
        id: 1
      }
    });
  });
});
