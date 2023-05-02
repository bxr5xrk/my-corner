import { Counter } from './Counter';
import componentRender from 'shared/lib/tests/componentRender';
import { fireEvent } from '@testing-library/react';

describe('Counter', () => {
  test('with only first param', () => {
    const { getByText } = componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10
        }
      }
    });

    expect(getByText('10')).toBeInTheDocument();
  });

  test('increments the value when the increment button is clicked', () => {
    const { getByText } = componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 0
        }
      }
    });
    const incrementButton = getByText('+');
    fireEvent.click(incrementButton);
    expect(getByText(1)).toBeInTheDocument();
  });

  test('decrements the value when the decrement button is clicked', () => {
    const { getByText } = componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10
        }
      }
    });
    const decrementButton = getByText('-');
    fireEvent.click(decrementButton);
    expect(getByText(9)).toBeInTheDocument();
  });
});
