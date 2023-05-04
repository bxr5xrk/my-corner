import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator';
import { LangSwitcher } from './LangSwitcher';

const meta = {
  title: 'shared/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs'],
  argTypes: {
    isCollapsed: { control: 'boolean' }
  },
  parameters: {
    chromatic: { disableSnapshot: true }
  }
} satisfies Meta<typeof LangSwitcher>;

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
