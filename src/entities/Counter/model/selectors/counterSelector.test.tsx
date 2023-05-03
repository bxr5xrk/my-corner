import { RootState } from 'app/providers/StoreProvider';
import { selectCounter } from './counterSelectors';

describe('selectCounter selector', () => {
  test('should return the counter state', () => {
    const mockState: RootState = {
      counter: { value: 10 },
      user: { authData: null },
      authApi: null
    };
    const counterValue = selectCounter(mockState);

    expect(counterValue).toEqual({ value: 10 });
  });
});
