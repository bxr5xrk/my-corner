import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    children: 'Auth',
    show: true,
    onClose: () => ({})
  },
  decorators: [ThemeDecorator('dark-theme')]
};

export const Light: Story = {
  args: {
    children: 'Auth',
    show: true,
    onClose: () => ({})
  },
  decorators: [ThemeDecorator('light-theme')]
};
