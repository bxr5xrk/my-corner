import reducer, { counterActions } from './counterSlice';

describe('Counter Reducer', () => {
  it('should return the initial state', () => {
    const expectedInitialState = { value: 0 };
    expect(reducer(undefined, { type: '' })).toEqual(expectedInitialState);
  });

  it('should increment the counter value by 1', () => {
    const previousState = { value: 5 };
    const expectedNewState = { value: 6 };
    expect(reducer(previousState, counterActions.increment())).toEqual(
      expectedNewState
    );
  });

  it('should decrement the counter value by 1', () => {
    const previousState = { value: 5 };
    const expectedNewState = { value: 4 };
    expect(reducer(previousState, counterActions.decrement())).toEqual(
      expectedNewState
    );
  });
});
