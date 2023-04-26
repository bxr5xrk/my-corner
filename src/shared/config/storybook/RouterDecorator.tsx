/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter } from 'react-router-dom';

export default function RouterDecorator(Story: any) {
  return <BrowserRouter>{Story()}</BrowserRouter>;
}
