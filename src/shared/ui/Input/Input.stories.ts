import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator';
import { Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    chromatic: { disableSnapshot: true }
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDark: Story = {
  args: {
    type: 'text',
    placeholder: 'text',
    label: 'Text'
  },
  decorators: [ThemeDecorator('dark-theme')]
};

export const DefaultLight: Story = {
  args: {
    type: 'text',
    placeholder: 'text',
    label: 'Text'
  },

  decorators: [ThemeDecorator('light-theme')]
};

export const PasswordDark: Story = {
  args: {
    type: 'password',
    placeholder: 'text',
    label: 'Text'
  },
  decorators: [ThemeDecorator('dark-theme')]
};

export const PasswordLight: Story = {
  args: {
    type: 'password',
    placeholder: 'text',
    label: 'Text'
  },
  decorators: [ThemeDecorator('light-theme')]
};
