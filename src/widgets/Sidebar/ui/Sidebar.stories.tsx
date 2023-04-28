import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Sidebar>;

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
