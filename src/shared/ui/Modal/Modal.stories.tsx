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
    children: (
      <Modal.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-secondary-100 p-4 text-left align-middle text-secondary-900 shadow-xl transition-all">
        <Modal.Title as="h3" className="text-lg font-medium leading-6">
          Auth
        </Modal.Title>
      </Modal.Panel>
    ),
    show: true,
    onClose: () => ({})
  },
  decorators: [ThemeDecorator('dark-theme')]
};

export const Light: Story = {
  args: {
    children: (
      <Modal.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-secondary-100 p-4 text-left align-middle text-secondary-900 shadow-xl transition-all">
        <Modal.Title as="h3" className="text-lg font-medium leading-6">
          Auth
        </Modal.Title>
      </Modal.Panel>
    ),
    show: true,
    onClose: () => ({})
  },
  decorators: [ThemeDecorator('light-theme')]
};
