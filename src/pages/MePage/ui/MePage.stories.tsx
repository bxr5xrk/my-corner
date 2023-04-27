import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator';
import MePage from './MePage';

const meta = {
  title: 'page/MePage',
  component: MePage,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof MePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {}
};

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator('light-theme')]
};
