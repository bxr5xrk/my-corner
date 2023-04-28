import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  argTypes: {
    isCollapsed: { control: 'boolean' }
  },
  parameters: {
    chromatic: { disableSnapshot: false }
  }
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotCollapsed: Story = {
  args: {
    isCollapsed: false
  },
  decorators: [ThemeDecorator('dark-theme')]
};

export const Collapsed: Story = {
  args: {
    isCollapsed: true
  },
  decorators: [ThemeDecorator('dark-theme')]
};

export const CollapsedLight: Story = {
  args: {
    isCollapsed: true
  },
  decorators: [ThemeDecorator('light-theme')]
};
