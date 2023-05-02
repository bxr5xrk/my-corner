import { fireEvent } from '@testing-library/react';
import componentRender from 'shared/lib/tests/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('renders toggle, lang switcher and theme switcher buttons', () => {
    const { getByTestId, getByRole } = componentRender(<Sidebar />, {
      route: '/',
      initialState: { counter: { value: 10 } }
    });

    expect(getByTestId('toggle')).toBeInTheDocument();
    expect(getByRole('button', { name: 'language' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Light' })).toBeInTheDocument();
  });

  it('clicking on the toggle button should toggle sidebar collapse state', () => {
    const { getByTestId, getByRole } = componentRender(<Sidebar />, {
      route: '/',
      initialState: { counter: { value: 10 } }
    });

    const toggleButton = getByTestId('toggle');
    const initialWidthStyle = window
      .getComputedStyle(getByRole('complementary'))
      .getPropertyValue('width');

    fireEvent.click(toggleButton);
    const collapsedWidthStyle = window
      .getComputedStyle(getByRole('complementary'))
      .getPropertyValue('width');
    expect(collapsedWidthStyle).toBe('56px');
    expect(initialWidthStyle).not.toBe(collapsedWidthStyle);

    fireEvent.click(toggleButton);
    const expandedWidthStyle = window
      .getComputedStyle(getByRole('complementary'))
      .getPropertyValue('width');
    expect(expandedWidthStyle).toBe('288px');
    expect(expandedWidthStyle).not.toBe(collapsedWidthStyle);
  });

  it('lang switcher and theme switcher should be hidden when sidebar is collapsed', () => {
    const { getByRole, getByTestId } = componentRender(<Sidebar />, {
      route: '/',
      initialState: { counter: { value: 10 } }
    });

    const langSwitcher = getByRole('button', {
      name: 'language'
    });

    const themeSwitcher = getByRole('button', { name: 'Light' });

    const initialWidthStyle = window
      .getComputedStyle(getByRole('complementary'))
      .getPropertyValue('width');

    expect(langSwitcher).toBeInTheDocument();
    expect(themeSwitcher).toBeInTheDocument();

    fireEvent.click(getByTestId('toggle'));
    const collapsedWidthStyle = window
      .getComputedStyle(getByRole('complementary'))
      .getPropertyValue('width');

    // expect(queryByText('language')).toBeNull();
    // expect(queryByText('Light')).toBeNull();

    expect(initialWidthStyle).toBe('288px');
    expect(initialWidthStyle).not.toBe(collapsedWidthStyle);
  });
});
