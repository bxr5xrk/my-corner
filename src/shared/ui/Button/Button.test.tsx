import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders a button with children', () => {
    const { getByText } = render(<Button>Hello</Button>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click Me</Button>
    );
    fireEvent.click(getByText('Click Me'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('applies the "primary" theme class when theme prop is "primary"', () => {
    const { getByText } = render(<Button theme="primary">Primary</Button>);
    expect(getByText('Primary')).toHaveClass(
      'rounded-md border border-secondary-400 bg-secondary-200 px-4 py-1.5 text-sm font-semibold text-secondary-700 hover:bg-secondary-400 w-fit'
    );
  });

  it('applies no additional classes when theme prop is "clear"', () => {
    const { getByText } = render(<Button theme="clear">Clear</Button>);
    expect(getByText('Clear')).toHaveClass('w-fit');
  });

  it('applies Tailwind classes correctly', () => {
    const { getByText } = render(<Button w="full">Test</Button>);
    expect(getByText('Test')).toHaveClass('w-full');
    expect(getByText('Test')).not.toHaveClass('rounded-md');
  });
});
