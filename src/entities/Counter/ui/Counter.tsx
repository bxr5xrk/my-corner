import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { counterActions } from '../model/slice/counterSlice';
import { selectCounter } from '../model/selectors/counterSelectors';

export const Counter = () => {
  const { value: counter } = useAppSelector(selectCounter);
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
