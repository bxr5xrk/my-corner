import { render, fireEvent } from '@testing-library/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useTheme } from '../lib/useTheme';

jest.mock('../lib/useTheme', () => ({
  useTheme: jest.fn(() => ({ theme: 'dark-theme', toggleTheme: jest.fn() }))
}));

describe('ThemeSwitcher', () => {
  it('renders correctly', () => {
    const { getByText, getByRole } = render(
      <ThemeSwitcher isCollapsed={false} />
    );
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByText('Dark')).toBeInTheDocument();
  });

  it('toggles theme when clicked', () => {
    const mockToggleTheme = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light-theme',
      toggleTheme: mockToggleTheme
    });
    const { getByRole } = render(<ThemeSwitcher isCollapsed />);
    fireEvent.click(getByRole('button'));
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  it("doesn't show text when isCollapsed is true", () => {
    const { queryByText } = render(<ThemeSwitcher isCollapsed />);
    expect(queryByText('Dark')).not.toBeInTheDocument();
  });
});
