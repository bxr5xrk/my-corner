import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator';
import HomePage from './HomePage';

const meta = {
  title: 'page/HomePage',
  component: HomePage,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator('dark-theme')]
};

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator('light-theme')]
};
