import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  argTypes: {
    isCollapsed: { control: 'boolean' }
  }
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotCollapsed: Story = {
  args: {
    isCollapsed: false
  }
};

export const Collapsed: Story = {
  args: {
    isCollapsed: true
  }
};

export const CollapsedLight: Story = {
  args: {
    isCollapsed: true
  },
  decorators: [ThemeDecorator('light-theme')]
};
