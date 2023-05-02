import { useAppDispatch } from 'app/providers/StoreProvider';
import { useCounter } from '../model/counterSelectors';
import { counterActions } from '../model/counterSlice';

export const Counter = () => {
  const { value: counter } = useCounter();
  const dispatch = useAppDispatch();

  const increment = () => dispatch(counterActions.increment());

  const decrement = () => dispatch(counterActions.decrement());

  return (
    <div>
      <button onClick={increment}>+</button>
      <p>{counter}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
};
