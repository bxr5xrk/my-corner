import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator';
import { Link } from './Link';

const meta = {
  title: 'shared/Link',
  component: Link,
  tags: ['autodocs'],
  args: {
    to: '/'
  },
  argTypes: {}
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryDark: Story = {
  args: {
    theme: 'primary'
  }
};

export const PrimaryLight: Story = {
  args: {
    theme: 'primary'
  },
  decorators: [ThemeDecorator('light-theme')]
};

export const BorderedDark: Story = {
  args: {
    theme: 'bordered'
  }
};

export const BorderedLight: Story = {
  args: {
    theme: 'bordered'
  },
  decorators: [ThemeDecorator('light-theme')]
};
