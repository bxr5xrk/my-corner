/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoreProvider } from 'app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';

export default function componentDecorator(Story: any) {
  return (
    <BrowserRouter>
      <StoreProvider initialState={{ counter: { value: 1 } }}>
        {Story()}
      </StoreProvider>
    </BrowserRouter>
  );
}
