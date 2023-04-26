import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator';
import { Button } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    theme: { control: 'select', options: ['clear', 'primary'] }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Click me',
    theme: 'primary'
  }
};

export const ClearLight: Story = {
  args: {
    theme: 'clear',
    children: 'Click me'
  },
  decorators: [ThemeDecorator('light-theme')]
};

export const ClearDark: Story = {
  args: {
    theme: 'clear',
    children: 'Click me'
  },
  decorators: [ThemeDecorator('dark-theme')]
};
