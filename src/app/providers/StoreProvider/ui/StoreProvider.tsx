import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore, RootState } from '../config/store';

export default function StoreProvider({
  children,
  initialState
}: {
  children: ReactNode;
  initialState?: RootState;
}) {
  const store = createStore(initialState);

  return <Provider store={store}>{children}</Provider>;
}
