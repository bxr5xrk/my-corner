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
    expect(getByText('Primary')).toHaveClass('border p-2');
  });

  it('applies no additional classes when theme prop is "clear"', () => {
    const { getByText } = render(<Button theme="clear">Clear</Button>);
    expect(getByText('Clear')).not.toHaveClass('border p-2');
  });

  it('applies Tailwind classes correctly', () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText('Test')).toHaveClass('cursor-pointer');
    expect(getByText('Test')).not.toHaveClass('border');
    expect(getByText('Test').classList.contains('p-2')).toBe(false);
  });
});
